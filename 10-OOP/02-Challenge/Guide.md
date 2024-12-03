# Team Profile Generator App

## Step 1: Initialize the Project

	1.	Set up a new Node.js project:
    - mkdir team-roster
    - cd team-roster
    - npm init -y

    2.	Install dependencies:
	•	You’ll need inquirer for user input and fs for file handling.
    - npm install inquirer

    3.	Create the file structure:
	•	index.js for the main application logic
	•	team.html for the generated HTML file
	•	lib folder for classes (e.g., Manager.js, Engineer.js, Intern.js)

## Step 2: Create Classes for Team Members

Each team member (Manager, Engineer, Intern) can be modeled using a class that will hold specific information. We will also use inheritance so that all team members have shared properties like name, id, and email.
	1.	Manager Class (with officeNumber):
    class Manager {
        constructor(name, id, email, officeNumber) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.officeNumber = officeNumber;
            this.role = "Manager";
        }
        }

    2.	Engineer Class (with github username):
    class Engineer {
        constructor(name, id, email, github) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.github = github;
            this.role = "Engineer";
        }
        }

    3.	Intern Class (with school):
    class Intern {
        constructor(name, id, email, school) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.school = school;
            this.role = "Intern";
        }
        }


## Step 3: Prompts for User Input

	1.	Manager Input:
	•	Prompt for the manager’s details first.
	•	After the manager’s input, the application will display a menu to choose between adding an engineer, intern, or finishing the team creation.
	
    2.	Engineer/Intern Input:
	•	Depending on the option selected, ask for the details of either the engineer or the intern and store the results.
	
    3.	Exit and Generate HTML:
	•	When the user selects “Finish”, generate the HTML file using the collected data.


## Step 4: HTML Generation

	1.	Create a basic HTML template:
The HTML will have a section for each employee, formatted nicely with clickable links for emails and GitHub profiles.

	2.	Sample HTML template:
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        </head>
        <body>
        <h1>My Team</h1>
        <div id="manager">
            <h2>Manager</h2>
            <p>Name: {{manager.name}}</p>
            <p>Email: <a href="mailto:{{manager.email}}">{{manager.email}}</a></p>
            <p>Office Number: {{manager.officeNumber}}</p>
        </div>
        <div id="engineers">
            <h2>Engineers</h2>
            <!-- Engineer details will be dynamically added here -->
        </div>
        <div id="interns">
            <h2>Interns</h2>
            <!-- Intern details will be dynamically added here -->
        </div>
        </body>
    </html>

    3.	Add dynamic content using JavaScript:
	•	Create a function to generate the HTML based on the user input.
	•	Use template literals to insert the team members’ data into the HTML template.


## Step 5: Example Code for index.js

    Here is a sample of how index.js might look:

    const inquirer = require('inquirer');
    const fs = require('fs');
    const Manager = require('./lib/Manager');
    const Engineer = require('./lib/Engineer');
    const Intern = require('./lib/Intern');

    let teamMembers = [];

    const generateHTML = () => {
    let html = `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
    </head>
    <body>
        <h1>My Team</h1>
        <div id="manager">
        <h2>Manager</h2>
        <p>Name: ${teamMembers[0].name}</p>
        <p>Email: <a href="mailto:${teamMembers[0].email}">${teamMembers[0].email}</a></p>
        <p>Office Number: ${teamMembers[0].officeNumber}</p>
        </div>
        <div id="engineers">
        <h2>Engineers</h2>`;
    teamMembers.forEach(member => {
        if (member.role === "Engineer") {
        html += `
        <p>Name: ${member.name}</p>
        <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
        <p>GitHub: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></p>
        `;
        }
    });

    html += `
        </div>
        <div id="interns">
        <h2>Interns</h2>`;
    teamMembers.forEach(member => {
        if (member.role === "Intern") {
        html += `
        <p>Name: ${member.name}</p>
        <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
        <p>School: ${member.school}</p>
        `;
        }
    });

    html += `</div></body></html>`;

    fs.writeFileSync('team.html', html);
    console.log('Team roster has been generated!');
    };

    const promptManager = () => {
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What's the manager's name?"
        },
        {
        type: 'input',
        name: 'id',
        message: "What's the manager's employee ID?"
        },
        {
        type: 'input',
        name: 'email',
        message: "What's the manager's email?"
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: "What's the manager's office number?"
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        menu();
    });
    };

    const menu = () => {
    inquirer.prompt([
        {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['Add Engineer', 'Add Intern', 'Finish']
        }
    ])
    .then(answer => {
        if (answer.action === 'Add Engineer') {
        promptEngineer();
        } else if (answer.action === 'Add Intern') {
        promptIntern();
        } else {
        generateHTML();
        }
    });
    };

    const promptEngineer = () => {
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What's the engineer's name?"
        },
        {
        type: 'input',
        name: 'id',
        message: "What's the engineer's employee ID?"
        },
        {
        type: 'input',
        name: 'email',
        message: "What's the engineer's email?"
        },
        {
        type: 'input',
        name: 'github',
        message: "What's the engineer's GitHub username?"
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        menu();
    });
    };

    const promptIntern = () => {
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What's the intern's name?"
        },
        {
        type: 'input',
        name: 'id',
        message: "What's the intern's employee ID?"
        },
        {
        type: 'input',
        name: 'email',
        message: "What's the intern's email?"
        },
        {
        type: 'input',
        name: 'school',
        message: "What's the intern's school?"
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        menu();
    });
    };

    promptManager();


## Step 6: Run the Application

	•	Run the app with the command:
    node index.js

    This will prompt you for inputs and generate the team.html file once you finish adding all team members.

## Conclusion

    This approach ensures a dynamic, user-driven process where team members’ information is collected via the command line, and an HTML file is generated at the end, meeting the requirements provided in your prompt.