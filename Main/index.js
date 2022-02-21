// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "Welcome to the README generator! Please provide your full name:",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You must enter your name!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
