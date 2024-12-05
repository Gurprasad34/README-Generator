// TODO: Include packages needed for this application
//All imports of dependencies and modules
import colors from "colors";
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";



// TODO: Create an array of questions for user input
//Array full of all the questions we want to ask the user
const questions = [{
    type: "input",
    message: colors.green("What is the title of the project"),
    name: "title",
},
{
    type: "input",
    message: colors.green("What is the description of the project"),
    name: "description",
},
{
    type: "input",
    message: colors.green("What is are the installation instructions of the project"),
    name: "installation",
},
{
    type: "input",
    message: colors.green("Enter usage information"),
    name: "usage",
},
{
    type: "input",
    message: colors.green("Enter the contribution guidelines"),
    name: "contribution",
},
{
    type: "input",
    message: colors.green("Enter the test instructions"),
    name: "test",
},
{
    type: "list",
    choices: ["MIT","GPL","Apache","None"],
    message: colors.green("Which license are you using"),
    name: "license"
},
{
    type: "input",
    message: colors.blue("Enter your GitHub Username"),
    name: "github"
},
{
    type: "input",
    message: colors.blue("Enter your email address"),
    name: "email",
}

];

// TODO: Create a function to write README file
//Functions that creates a file called README.md with a data parameter
function readmeCreator(data){
    fs.writeFile("README.md", data, (err) => {
        err ? console.error(err) : console.log(colors.green("README created!"))
    })
    
}

// TODO: Create a function to initialize app
//Functions that prompts the questions we had initlized in the array then users the
//answers as an argument for the generateMarkdwon function we imported
//then we put that in the readmeCreator as an argument to genereate our README
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        readmeCreator(readmeContent);
    })
}

// Function call to initialize app
init();

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```