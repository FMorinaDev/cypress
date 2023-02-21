pipeline {
    agent any

    tools {nodejs "Node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente1"
                    }
                    steps {
                        git url: 'https://github.com/FMorinaDev/cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 83b7cb89-5d29-4f4c-9bd2-74d5a1f922e2  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agente2"
                    }
                    steps {
                        git url: 'https://github.com/FMorinaDev/cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 83b7cb89-5d29-4f4c-9bd2-74d5a1f922e2  --parallel'
                    
                    }
                }
            }

             
        }

    }
            
}