// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// This is for rendering the License Badge
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(
    license
  )}-blue)`;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//This is for rendering the license link
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `- [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//This generated a line that tells you what license it is under
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `## License
This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
//Usings the past fucntions to create the README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach me at:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

## Video
[Video Walkthrough](https://app.screencastify.com/v3/watch/wmkccIBvnFSjS3aRLfKb)


## Two hashtags create blue sub-heading
- [Having test here](#URLoranchorherebecomesclickable)
`;
}

export default generateMarkdown;
