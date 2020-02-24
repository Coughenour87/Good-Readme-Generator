const inquirer = require('inquirer');
const api = require('./utils/api')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
const questions =[

    {
        type: "input",
        message: "What is your username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "electronicmail"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name:"description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install"
    },
    {
        type: "input",
        message: " What command should be run to run tests?",
        name: "test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "repo"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    }

];

function writeToFile(fileName, data) {
}

function init() {
    inquirer.prompt(questions).then(results =>{
        console.log(results)
        api.getUser(results.username).then(({data})=>{
            fs.writeFile('test.md', generateMarkdown({...results, ...data}), err=>{
                if(err) throw err
                console.log('saving ....')
            })
        })
    })
}

init();
