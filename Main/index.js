// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// Create an array of questions for user input
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
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log(
          "Please link to your GitHub repo so users know where to find your work"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("You must provide an email address");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please provide a project title.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description here:",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log(
          "It is essential to provide a description of your project."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Instructions for usage:",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log(
          "Providing instructions for usage will help users properly navigate your project. Please try again."
        );
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmLicenses",
    message: "Would you like to include a license?",
    default: false,
  },
  {
    type: "list",
    name: "licenses",
    message: "What license would you like to include?",
    choices: ["MIT", "GPL", "CC--0"],
    when: ({ confirmLicenses }) => {
      if (confirmLicenses) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    // make a readme file and add to finished folder
    fs.writeFile("./finished/README.md", data, (err) => {
      if (err) {
        reject(err);
        // return out of the function
        return;
      }
      //resolve the Promise
      resolve({
        ok: true,
        message: console.log(
          'Navigate to the "finished" folder to see your README!'
        ),
      });
    });
  });
}

// Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then((userInput) => {
    return generateMarkdown(userInput);
  })
  .then((readmeInfo) => {
    return writeToFile(readmeInfo);
  })
  .catch((err) => {
    console.log(err);
  });
