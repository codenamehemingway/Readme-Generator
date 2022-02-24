const fs = require("fs");
// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(
      license
    )})`;
  }
}
//choosealicense.com/licenses/
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://lbesson.mit-license.org/`;
  }
  if (license === "GPL") {
    return `http://perso.crans.org/besson/LICENSE.html`;
  }
  if (license === "CC--0") {
    return `https://creativecommons.org/licenses/by-nd/4.0`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
  This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}${renderLicenseBadge(data.licenses)}
  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Credits](#credits)
  ## Description
  ${data.description}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.licenses)}
  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}
  ## Credits
  ${data.name}
`;
}

module.exports = generateMarkdown;
