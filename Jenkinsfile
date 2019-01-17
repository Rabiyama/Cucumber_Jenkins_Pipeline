pipeline{
	agent any
	stages {
	    
	    stage ('Compile stage'){
	    
		    steps{
				withMaven(maven: 'apache-maven-3.6.0-bin (1)'){
					sh 'mvn clean install'

                 }
	
			}
	             
      	}
      	 stage ('Test stage'){
	    
		    steps{
				withMaven(maven: 'apache-maven-3.6.0-bin (1)'){
					sh 'mvn test'

                 }
	
			}
	             
      	}
      	 stage ('Deploy'){
	    
		    steps{
					withMaven(maven: 'apache-maven-3.6.0-bin (1)'){
						sh 'mvn deploy'
                 	}
            }
	
		}
	}

}