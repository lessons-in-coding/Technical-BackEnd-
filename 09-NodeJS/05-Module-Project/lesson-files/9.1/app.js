const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);


/*
// About
  - this is node.js, if not, needs to install this first
  - this node can catch the arguments from the command line by way of 
    process.argv

// Set Up
  - install node.js 
    - follow the instruction from the web nodejs.org

  - create app.js
    ```
      const profileDataArgs = process.argv.slice(2);

      const printProfileData = profileDataArr => {
        // This...
        for (let i = 0; i < profileDataArr.length; i += 1) {
          console.log(profileDataArr[i]);
        }

        console.log('================');

        // Is the same as this...
        profileDataArr.forEach(profileItem => console.log(profileItem));
      };

      printProfileData(profileDataArgs);
    ```
  
    - Run the App
      - node app.js argv1, argv2
        * message of the outputs

    - Code Explanations
      - Capture user's input
        * process.argv - messages of it
        * .slice(2) - message of it
    
      - for Loop <--> for Each Loop
        * message of them by comparing 

      - call the function
        * printing out the added arguments one bye one

// 
*/
