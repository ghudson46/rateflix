const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const addModule = require("./utils/generateMarkdown.js");

const markdown = addModule.genMarkdown;
const fileName = "README.md";

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the name of your application?",
    name: "title"
  },
  {
    type: "input",
    message: "Enter the link of your live application",
    name: "link"
  },
  {
    type: "input",
    message: "Take a screenshot or gif of your App and enter the url.",
    name: "appImg"
  },
  {
    type: "input",
    message: "Give a description of your app",
    name: "description"
  },
  {
    type: "input",
    message: "How does a user install the app?",
    name: "install"
  },
  {
    type: "input",
    message: "How does a user use the app?",
    name: "usage"
  },
  {
    type: "list",
    message: "What license are you using??",
    name: "license",
    choices: ['MIT', 'GPL', 'Apache', 'BSD']
  },
  {
    type: "input",
    message: "How can somebody contribute to your app? ",
    name: "contribute"
  },
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username"
  },
  {
    type: "input",
    message: "What is the link to your GitHub profile?",
    name: "profile"
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email"
  },
  {
    type: "input",
    message: "How should people go about contacting you?",
    name: "contact"
  },
  {
    type: "input",
    message: "How did you test the app?",
    name: "test"
  }
];


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("it worked!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(data => {
      let content = markdown(data);
      writeToFile(fileName, content);
    });
}

// function call to initialize program
init();
