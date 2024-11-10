// npm init
// npm install moment

const inquirer = require("inquirer");
// const dateTime = moment();
// console.log(dateTime.format("YYYY-MM-DD"));
console.log(inquirer);
// node app

// "MMMM Do YYYY, h:mm:ss a"
// MMMM: Full month name (e.g., “November”).
// Do: Day of the month with ordinal (e.g., “1st”).
// YYYY: Full year (e.g., “2024”).
// h:mm:ss a: Hour (1–12), minutes, seconds, and am/pm.

// Summery of Common Format Pattern
// YYYY-MM-DD	2024-11-01	ISO date format
// MMMM Do YYYY	November 1st 2024	Full month, day with ordinal, full year
// MMM Do YY	Nov 1st 24	Abbreviated month, day with ordinal, 2-digit year
// dddd	Friday	Day of the week
// MM/DD/YYYY	11/01/2024	Short U.S. date format
// HH:mm:ss	15:45:30	24-hour time
// h:mm:ss a	3:45:30 pm	12-hour time with am/pm
// dddd, MMMM Do	Friday, November 1st	Day of week, full month and day
// X	1728816000	Unix timestamp

// ====================================
// Yes, deleting node_modules and reinstalling dependencies can often resolve issues after a version update. However, just reinstalling alone may not fix compatibility issues if the latest version of inquirer has breaking changes.

// Here’s the recommended approach:

// 	1.	Delete node_modules: This will remove all installed dependencies.
//     rm -rf node_modules
//     2.	Clear the package-lock.json File (optional): This file locks versions to ensure consistent installs, but clearing it allows for a completely fresh install. You can delete it if you want npm to regenerate it with the latest compatible dependencies.
//     rm package-lock.json
//     3.	Reinstall All Dependencies:
//     npm install
//     4.	Install the Latest Version of inquirer: If you specifically need the latest version, you can run:
//     npm install inquirer@latest
//     5.	Test Your Application: After reinstalling, test your application. If it still doesn’t work, you might need to check the inquirer documentation for any updated syntax or usage changes.

//     Important Note
    
//     If your code depends on an older version of inquirer and the latest version has breaking changes, you may need to adjust your code to be compatible with the latest version or revert to the previous compatible version of inquirer.
// ==================================


// .gitignore
// node_modules

// if accidentally added
// git rm -r --cached node_modules

// ==================================

// const inquirer = require('inquirer');
// console.log(inquirer)
// run: app.js

// ==================================

// const inquirer = require('inquirer');

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?'
//     }
//   ])
//   .then(answers => console.log(answers));
//   run: app.js

// ==================================

// const inquirer = require('inquirer');

// const promptUser = () => {
//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?'
//       }
//     ]);
//   };
  
//   promptUser().then(answers => console.log(answers));

//   run: app.js


//   const promptUser = () => {
//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?'
//       },
//       {
//         type: 'input',
//         name: 'github',
//         message: 'Enter your GitHub Username'
//       },
//       {
//         type: 'input',
//         name: 'about',
//         message: 'Provide some information about yourself:'
//       }
//     ]);
//   };

  // ==================================

//   const inquirer = require('inquirer');

//   const promptProject = () => {
//     console.log(`
//   =================
//   Add a New Project
//   =================
//   `);
//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is the name of your project?'
//       },
//       {
//         type: 'input',
//         name: 'description',
//         message: 'Provide a description of the project (Required)'
//       },
//       {
//         type: 'checkbox',
//         name: 'languages',
//         message: 'What did you build this project with? (Check all that apply)',
//         choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//       },
//       {
//         type: 'input',
//         name: 'link',
//         message: 'Enter the GitHub link to your project. (Required)'
//       },
//       {
//         type: 'confirm',
//         name: 'feature',
//         message: 'Would you like to feature this project?',
//         default: false
//       },
//       {
//         type: 'confirm',
//         name: 'confirmAddProject',
//         message: 'Would you like to enter another project?',
//         default: false
//       }
//     ]);
//   };

//   promptUser()
//   .then(answers => console.log(answers))
//   .then(promptProject)
//   .then(projectAnswers => console.log(projectAnswers));

//   run: 

// ==================================

