#!/usr/bin/env groovy
def gv
pipeline {
    agent any

    environment {
        AWS_CREDS = "aws_credentials"
        AWS_DEFAULT_REGION = "ap-southeast-2"
        AWS_ACCOUNT_ID = "023527796686"
        
        ECR_REPO_SERVER = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com"
        ECR_REPO_NAME_UAT = "dealin-terraform_backend_uat-ecr"
        ECR_REPO_NAME_PRO = "dealin-terraform_backend_pro-ecr"       
      

        TASK_DEFINITION_NAME_UAT ="dealin-terraform_backend_uat-task"
        ECS_CLUSTER_UAT = "dealin-terraform_backend_uat-cluster"
        ECS_SERVICE_UAT ="dealin-terraform_backend_uat-service"

        TASK_DEFINITION_NAME_PRO ="dealin-terraform_backend_pro-task"
        ECS_CLUSTER_PRO ="dealin-terraform_backend_pro-cluster"
        ECS_SERVICE_PRO ="dealin-terraform_backend_pro-service"
    }

    stages {
        stage("Init") {
            steps{
               script{
                    ansiColor('vga'){
                        gv=load "script.groovy"
                    }
               }
            }
        }
        stage('Check out source code from Bitbucket') {
            steps {                
                ansiColor('vga'){
                    echo "check out source code from Bitbucket"   
                    checkout scm         
                }                     
            }
        }
        stage('Testing') {
            steps {        
                ansiColor('vga'){
                    echo 'Running Unit Tests...'
                    sh "npm install"
                    sh "npm run test"                     
                }                                  
            }
        }
        stage('Increment version UAT') {
             when {
                expression {                  
                   BRANCH_NAME == "develop"
                }
            }
            steps {      
                script{
                    ansiColor('vga'){
                        echo "Increment version"
                        // update application version in the package.json file with the minor
                        sh " npm --no-git-tag-version version minor "
                        // read the updated version from the package.json file
                        def packageJson= readJSON file:'package.json'
                        def version = packageJson.version
                        //  set the new version as part of the image_version
                        env.IMAGE_VERSION = "$version"                  
                   }    
                }                         
            }
        }
        stage('Build image for UAT') {
            when {
                expression {                  
                    BRANCH_NAME == "develop"
                }
            }
            steps {                
                script {
                    echo "build docker image UAT" 
                    gv.buildDockerImage(env.ECR_REPO_NAME_UAT, env.IMAGE_VERSION)
                } 
            }
        }
        stage('Push image to ECR UAT') {
            when {
                expression {
                     BRANCH_NAME == "develop"
                }
            }
            steps {                
                script{
                    echo "Push image into ECR UAT"
                    gv.pushImageToECR(env.ECR_REPO_NAME_UAT, env.IMAGE_VERSION)
                }                 
            }
        }
        stage ('Deploy to UAT'){
            when {
                expression {
                     BRANCH_NAME == "develop"     
                }
            }
            steps {
                script{
                    echo "Deploy to UAT Environment!!!"
                    gv.deployToECS(env.TASK_DEFINITION_NAME_UAT, env.ECR_REPO_NAME_UAT, env.IMAGE_VERSION, env.ECS_CLUSTER_UAT, env.ECS_SERVICE_UAT )
                }               
            }
            post {
                always {
                    script{
                        echo 'Clear Up UAT Docker Image...'
                        gv.clearUpDockerImage(env.ECR_REPO_NAME_UAT, env.IMAGE_VERSION)
                    }
                }
               
                success {
                    echo 'Deploy to ECS UAT environment successfully!'
                }
                failure {
                        echo 'The deploy stage failed.'
                        echo 'Roll back to last deployment.'
                }
            }
        }
        stage ('Commit updated version UAT'){
            when {
                expression {
                     BRANCH_NAME == "develop"     
                }
            }
            steps{
                script{
                    gv.commitVersionUpdate()
                }
            }
        }
        stage("Build image for Pro"){
            when {
                expression {
                    BRANCH_NAME == "main"
                }
            }
            steps{
                script {
                        echo "Build image for Production!"
                        gv.buildDockerImage(env.ECR_REPO_NAME_PRO, env.BUILD_NUMBER)
                                         
                }
            }
        }
        stage("Push image into ECR Pro"){
            when{
                expression{
                    BRANCH_NAME == "main"
                }
            }
            steps {
                script {
                    echo "Push image into ECR Production environment!!!"
                    gv.pushImageToECR(env.ECR_REPO_NAME_PRO, env.BUILD_NUMBER)                   
                }
            }
        }
        stage("Deploy to Pro"){
            when {
                expression {
                    BRANCH_NAME == "main"
                }
            }
            steps{
                script {
                    echo "Deploy to Production Environment!!!"
                    gv.deployToECS(env.TASK_DEFINITION_NAME_PRO, env.ECR_REPO_NAME_PRO, env.BUILD_NUMBER, env.ECS_CLUSTER_PRO, env.ECS_SERVICE_PRO ) 
                }
            }
            post {
                always {
                    script{
                        echo 'Clear Up Docker Image...'
                        gv.clearUpDockerImage(env.ECR_REPO_NAME_PRO, env.BUILD_NUMBER)
                    }
                }
                success {
                    echo 'Deploy to ECS Production Environment successfully!'
                }
                failure {
                    echo 'The deploy to ECS Production Environment failed.'
                    echo 'Roll back to last deployment.'     
                }
            }
        }
    }
     post {
        always {
            cleanWs()
        }
    }
}
