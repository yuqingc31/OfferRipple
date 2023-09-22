#!/usr/bin/env groovy
pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    environment{
        AWS_CREDENTIAL  = 'aws_credentials'
        AWS_REGION      = 'ap-southeast-2'

        CLOUDFRONT_DISTRIBUTION_ID_UAT = 'E2KW15D7XQ5EEB'
        S3_BUCKET_UAT       = 'offerripple-front-uat'
        WEB_LINK_UAT        = 'uat.offerripple.com'
        ENV_BUCKET_UAT      = "uat-offerripple-env"
        
        // REACT_APP_API_ENDPOINT_UAT = 'https://uat-api.offerripple.com'
        CLOUDFRONT_DISTRIBUTION_ID_PRO = 'EYO2MMTCCS06U'
        S3_BUCKET_PRO       = 'pro-offerripple-front'
        WEB_LINK_PRO        = 'offerripple.com'
        ENV_BUCKET_PRO      = "pro-offerripple-env"
         // REACT_APP_API_ENDPOINT_PRO = 'https://api.offerripple.com'

        SONARQUBE_SCANNER="sonarqubescanner"
        SONARQUBE_SERVER="sonarqube"
        PROJECT_KEY="offerripple-frontend"
    }
    stages{
        stage('Check out source code from Bitbucket') {
            steps {                
                ansiColor('xterm'){
                    echo "check out source code from Bitbucket"   
                    checkout scm         
                }                     
            }
        }
        stage('NPM Install dependency'){
            steps{
                ansiColor('xterm'){
                    echo "Installing packages"
                    sh 'npm install'
                }
               
            }          
        }
        stage('NPM test and build for feature branch'){
            when {
                expression {                  
                   BRANCH_NAME != "develop" && BRANCH_NAME != "master"
                }
            }
            steps{
                ansiColor('xterm'){
                    echo "Building compressed files for UAT..."
                    sh "npm run build"
                    sh 'ls -la ./build'
                }                            
            }
        } 
        // stage("Sonarqube Ananlysis") {
        //     when {
        //         expression {                  
        //             BRANCH_NAME == "develop"
        //         }
        //     }
        //     steps {
        //         script{
        //             def scannerHome = tool "${SONARQUBE_SCANNER}"
        //             withSonarQubeEnv("${SONARQUBE_SERVER}") {
        //                 sh """
        //                     ${scannerHome}/bin/sonar-scanner \
        //                     -Dsonar.projectKey=${PROJECT_KEY}\
        //                     -Dsonar.sources=src \
        //                 """
        //             }

        //         }
        //     }
        // }
        // stage("Quality Gate") {
        //     when {
        //         expression {                  
        //             BRANCH_NAME == "develop"
        //         }
        //     }
        //     steps {
        //         timeout(time: 1, unit: 'HOURS') {
        //             waitForQualityGate abortPipeline: true
        //         }
        //     }
        // }
        stage('Get Environment Variables for UAT'){
            when {
                expression {                  
                   BRANCH_NAME == "develop"
                }
            }
            steps{
                withAWS(credentials: AWS_CREDENTIAL, region: AWS_REGION){
                        ansiColor('xterm'){
                            echo "Copy .env from s3 for UAT enviroment!"
                            sh "aws s3 cp s3://${ENV_BUCKET_UAT}/uat_env .env"
                    }
                }              
            }
        } 
        stage('NPM build for UAT'){
            when {
                expression {                  
                   BRANCH_NAME == "develop"
                }
            }
            steps{
                ansiColor('xterm'){
                    echo "Building compressed files for UAT..."
                    sh "npm run build"
                    sh 'ls -la ./build'
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
                    ansiColor('xterm'){
                        echo "Increment version"
                        // update application version in the package.json file with the minor
                        sh " npm --no-git-tag-version version minor "
                        // read the updated version from the package.json file
                        def packageJson= readJSON file:'package.json'
                        def version = packageJson.version    
                        echo "${version}"       
                   }    
                }                         
            }
        }
        stage("Deploy to S3 bucket UAT") {
             when {
                expression {                  
                   BRANCH_NAME == "develop"
                }
            }
            steps {
                withAWS(credentials: AWS_CREDENTIAL, region: AWS_REGION){
                    ansiColor('xterm') {
                        dir('./build') {
                            echo "deploy static files to S3"
                            sh "aws s3 sync . s3://${S3_BUCKET_UAT} --delete"
                        }
                    }
                }
            }
        }
         stage("Revalidate CDN Cache UAT") {
             when {
                expression {                  
                   BRANCH_NAME == "develop"
                }
            }
            steps {
                withAWS(credentials: AWS_CREDENTIAL, region: AWS_REGION){
                    ansiColor('xterm') {
                        echo "Revalidate CDN Cache UAT"                           
                        sh "aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID_UAT} --paths '/*'"
                        echo "Please access web link: ${WEB_LINK_UAT}"
                    }
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
                     ansiColor ('vga'){
                        withCredentials([usernamePassword(credentialsId: 'Bitbucket', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                            sh 'git config --global user.email "offerripple@gmail.com"'
                            sh 'git config --global user.name "offerripple"'
                            sh 'git status'
                            sh 'git branch'
                    
                            sh "git remote set-url origin https://${USER}:${PASS}@bitbucket.org/alexma0912/dealin-frontend-reactjs.git"
                        
                            sh 'git add .'
                            echo "${USER} ${PASS}"
                            sh 'git commit -m "ci:version bump ${version}"'
                            sh 'git push origin HEAD:develop'
                        }
                    }             
                }
            }
        }
        stage('Get Environment Variables for Pro'){
            when {
                expression {                  
                   BRANCH_NAME == "master"
                }
            }
            steps{
                withAWS(credentials: AWS_CREDENTIAL, region: AWS_REGION){
                        ansiColor('xterm'){
                            echo "Copy .env from s3 for Pro enviroment!"
                            sh "aws s3 cp s3://${ENV_BUCKET_PRO}/pro_env .env"
                    }
                }              
            }
        } 
        stage('NPM build for Pro'){
            when {
                expression {                  
                   BRANCH_NAME == "master"
                }
            }
            steps{
                ansiColor('xterm'){
                    echo "Building compressed files for Pro environment..."
                    sh "npm run build"
                    sh 'ls -la ./build'
                }                            
            }
        } 
        stage("Deploy to S3 bucket Pro") {
             when {
                expression {                  
                   BRANCH_NAME == "master"
                }
            }
            steps {
                withAWS(credentials: AWS_CREDENTIAL, region: AWS_REGION){
                    ansiColor('xterm') {
                        dir('./build') {
                            echo "deploy static files to S3 Pro"
                            sh "aws s3 sync . s3://${S3_BUCKET_PRO} --delete"
                        }
                    }
                }
            }
        }
        stage("Revalidate CDN Cache Pro") {
             when {
                expression {                  
                   BRANCH_NAME == "master"
                }
            }
            steps {
                withAWS(credentials: AWS_CREDENTIAL, region: AWS_REGION){
                    ansiColor('xterm') {
                        echo "Revalidate CDN Cache Pro"
                        sh "aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID_PRO} --paths '/*'"
                        echo "Please access web link: ${WEB_LINK_PRO}"
                    }
                }
            }
        }
    }
    post {

        failure {
            echo 'Pipeline execution failed!'
        }
        success {
            echo 'Pipeline execution succeeded!'
        }
        always { 
            script {
                try{
                        cleanWs()
                } catch (Exception e) {
                    echo "clean failed"
                }
            }             
        }
    }
}