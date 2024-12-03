# Portfolio Profile Generator

## Install Node.js
    1.	Go to the Node.js Website:
        Visit https://nodejs.org.
    2.	Download the macOS Installer:
        Choose the LTS (Long-Term Support) version for most use cases. Alternatively, pick the Current version if you want the latest features.
    3.	Run the Installer:
        Double-click the downloaded .pkg file and follow the instructions to complete the installation.
    4.	Verify Installation:
    Open the terminal and run:
        node -v
        npm -v

## Step: 1 [setup installation]
    - create app.js file
    - add sample code there 
        console.log('Hello Node!');
    - run the app
        node app.js //output: Hello Node!

## Step: 2 [Capture Command-Line Arguments]
    //test 1
    - update the app.js
        var commandLineArgs = process.argv;
        console.log(commandLineArgs);
    - run the app
        node app.js 'Hello Node' From the command line
    
    //test 2
    - update again the app.js
        var profileDataArgs = process.argv.slice(2, process.argv.length);
        console.log(profileDataArgs);
    - run the app
        node app.js 'Lernantino' 'Web Developer'

## Step: 3
        //9.1 Code
        ```
        //CLI argv
        const profileDataArgs = process.argv.slice(2);

        const printProfileData = profileDataArr => {
        // This for Loop ...
        for (let i = 0; i < profileDataArr.length; i += 1) {
            console.log(profileDataArr[i]);
        }

        console.log('================');

        // Is the same as this forEach Loop ...
        profileDataArr.forEach(profileItem => console.log(profileItem));
        };

        //Fn is called
        printProfileData(profileDataArgs);
        ```
        
        // Code Explanation
        - process.argv is an array with command-line arguments
	    - process.argv[0] is Node.js path
        - process.argv[1] is script file path
	    - process.argv.slice(2) removes these first two elements