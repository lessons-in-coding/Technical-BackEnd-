const fs = require('fs');

const inquirer = require('inquirer');

// const generatePage = require('./src/page-template');
let user = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
}


user().then(answer => console.log(answer));