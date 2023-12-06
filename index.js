const fs = require('fs');
const inquirer = require('inquirer');

function generateREADME(answers) {
    return `
    # ${answers.title}
    
    ## Description
    ${answers.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Test](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${answers.installation}
    
    ##Usage
    ${answers.usage}

    ## License
    ![License Badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

    ##Tests
    ${answers.tests}

    ##Questions
    For questions, reach me at ${answers.email}.
    [Github Profile](https://github.com/${answers.username})
    `;
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter description'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage'
        },
        {
            type: 'list',
            name: 'license',
            nessage: 'Choose a license:',
            choices: ['MIT', 'Apache', 'GPL', 'none'],
        }
    ])