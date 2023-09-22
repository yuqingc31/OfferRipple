#!/usr/bin/env groovy

def buildDockerImage(String ECR_REPO, String IMAGE_VERSION ){
     ansiColor('vga'){
        sh "docker build -t ${ECR_REPO_SERVER}/${ECR_REPO}:${IMAGE_VERSION} ."
    }                     
}

def pushImageToECR(String ECR_REPO, String IMAGE_VERSION){
    ansiColor('vga'){
        withAWS(credentials:"$AWS_CREDS"){
            echo 'Logging into ECR...'
            sh "aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${ECR_REPO_SERVER}"
            echo "Push image to ECR..."   
            sh "docker push ${ECR_REPO_SERVER}/${ECR_REPO}:${IMAGE_VERSION}"
        }
    }    
    
}

def deployToECS(String TASKDEFINITION, String ECR_REPO, String IMAGE_VERSION, String ECS_CLUSER, String ECS_SERVICE){
     ansiColor ('vga'){
        withAWS(credentials:"$AWS_CREDS"){
            
            echo "Update Task definition"
            // Get the current task defnition
            def taskDefinitionOutput = sh(
                script: "aws ecs describe-task-definition --task-definition $TASKDEFINITION",
                returnStdout: true
            ).trim()
            originalTaskDefinition = readJSON text: taskDefinitionOutput
            def taskDefinition = originalTaskDefinition.taskDefinition
            def containerDefinitions = taskDefinition.containerDefinitions
        
            // Update the Docker image
            containerDefinitions.each { containerDefinition ->
                containerDefinition.image = "${ECR_REPO_SERVER}/${ECR_REPO}:${IMAGE_VERSION}".toString()
            }
    
            // Prepare new task definition input for AWS CLI
            def newTaskDefinition = [
                family: taskDefinition.family,
                taskRoleArn: taskDefinition.taskRoleArn,
                executionRoleArn: taskDefinition.executionRoleArn,
                networkMode: taskDefinition.networkMode,
                containerDefinitions: taskDefinition.containerDefinitions,
                requiresCompatibilities: taskDefinition.requiresCompatibilities,
                cpu: taskDefinition.cpu,
                memory: taskDefinition.memory
            ]
            
            // Save the new container definitions as JSON file
            writeJSON file: 'task-definition.json', json: newTaskDefinition
            // Register new task definition
            echo "Register new task definition"
            def newOutput = sh (
                script :"aws ecs register-task-definition --cli-input-json file://task-definition.json --region ${AWS_DEFAULT_REGION}",
                returnStdout: true
            ).trim()

            // Get the newest taskDefinition arn
            newOriginalTaskDefinition = readJSON text:newOutput
            def newCreatedTaskDefinition = newOriginalTaskDefinition.taskDefinition
            
            // Update the ECS service
            echo "Update ECS Service"
            sh "aws ecs update-service --cluster ${ECS_CLUSER} --service ${ECS_SERVICE} --task-definition  ${newCreatedTaskDefinition.taskDefinitionArn} --region ${AWS_DEFAULT_REGION}"
        }                  
    }

}


def commitVersionUpdate(){
     ansiColor ('vga'){
        withCredentials([usernamePassword(credentialsId: 'Bitbucket', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
            sh 'git config --global user.email "offerripple@gmail.com"'
            sh 'git config --global user.name "offerripple"'
            sh 'git status'
            sh 'git branch'
    
            sh "git remote set-url origin https://${USER}:${PASS}@bitbucket.org/alexma0912/dealin-backend.git"       
            sh 'git add .'
            sh 'git commit -m "ci:version bump ${IMAGE_VERSION}"'
            sh 'git push origin HEAD:develop'
        }

    }
}

def clearUpDockerImage(String ECR_REPO, String IMAGE_VERSION){
    ansiColor('vga'){
        def imageId = sh(
        script:"docker images -qf reference=\${ECR_REPO_SERVER}/${ECR_REPO}:${IMAGE_VERSION}",
        returnStdout:true
    )
        echo "Image Name : ${ECR_REPO_SERVER}/${ECR_REPO}:${IMAGE_VERSION}"
        echo "ImageId: ${imageId}"

        if ("${imageId}" != ""){
            echo "Deleting image with id: ${imageId}"
            sh "docker rmi -f ${imageId}"
            sh "docker images"
        }else{
            echo "No image need to delete!"
            sh "docker images"
        }
    
    }
    
}

def deployToEKS(){
     ansiColor ('vga'){
        withAWS(credentials:"$AWS_CREDS"){
            withVault(configuration: [timeout: 60, vaultCredentialId: "${env.vaultCredentialId}", vaultUrl: "${env.vaultUrl}"],
                vaultSecrets: [[path: 'secrets/creds/dealin', 
                                secretValues: [
                                    [vaultKey: 'CONNECTION_STRING'],
                                    [vaultKey: 'JWT_KEY'],
                                    [vaultKey: 'NODE_ENV'],
                                    [vaultKey: 'PORT'],
                                    [vaultKey: 'API_PREFIX'],
                                    [vaultKey: 'M3_REGION'],
                                    [vaultKey: 'M3_BUCKET_NAME'],
                                    [vaultKey: 'M3_ACCESS_KEY_ID'],
                                    [vaultKey: 'M3_SECRET_ACCESS_KEY'],
                                    [vaultKey: 'GOOGLE_MAP_API'],
                                    [vaultKey: 'M3_SAVE_PATH'],
                                    [vaultKey: 'STRIPE_KEY'],
                                    [vaultKey: 'STRIPE_ENDPOINT_SECRET'],                                
                                ]
                ]]) {
                    echo "!!!!-------------------------------!!!!"
                    
                    sh "aws eks update-kubeconfig --name ${CLUSTER_NAME} --region ${AWS_DEFAULT_REGION}"
                    withCredentials([usernamePassword(credentialsId: 'ecr-credentials', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh "kubectl delete secret my-registry-key || true"
                        sh "kubectl create secret docker-registry my-registry-key --docker-server=https://${ECR_REPO_SERVER} --docker-username=$USER --docker-password=$PASS"
                    }
                    sh "envsubst < offerripple.yaml | kubectl apply -f -"
            }   
        }                  
    }
}

def deleteFromCluster(){
     ansiColor ('vga'){
        withAWS(credentials:"$AWS_CREDS"){
            withVault(configuration: [timeout: 60, vaultCredentialId: "${env.vaultCredentialId}", vaultUrl: "${env.vaultUrl}"],
                vaultSecrets: [[path: 'secrets/creds/dealin', 
                                secretValues: [
                                    [vaultKey: 'CONNECTION_STRING'],
                                    [vaultKey: 'JWT_KEY'],
                                    [vaultKey: 'NODE_ENV'],
                                    [vaultKey: 'PORT'],
                                    [vaultKey: 'API_PREFIX'],
                                    [vaultKey: 'M3_REGION'],
                                    [vaultKey: 'M3_BUCKET_NAME'],
                                    [vaultKey: 'M3_ACCESS_KEY_ID'],
                                    [vaultKey: 'M3_SECRET_ACCESS_KEY'],
                                    [vaultKey: 'GOOGLE_MAP_API'],
                                    [vaultKey: 'M3_SAVE_PATH'], 
                                    [vaultKey: 'STRIPE_KEY'],
                                    [vaultKey: 'STRIPE_ENDPOINT_SECRET'],                           
                                ]
                ]]) {
                    echo "!!!!-------------------------------!!!!"
                    
                    sh "aws eks update-kubeconfig --name ${CLUSTER_NAME} --region ${AWS_DEFAULT_REGION}"
                    withCredentials([usernamePassword(credentialsId: 'ecr-credentials', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh "kubectl delete secret my-registry-key || true"
                        sh "kubectl create secret docker-registry my-registry-key --docker-server=https://${ECR_REPO_SERVER} --docker-username=$USER --docker-password=$PASS"
                    }
                    sh "helm uninstall ${HELM_CHART} -n ${NAMESPACE} || true"
                    sh "kubectl delete pvc --all -n ${NAMESPACE} || true"
                    sh "envsubst < offerripple.yaml | kubectl delete -f -"

            }   
        }                  
    }
}

return this