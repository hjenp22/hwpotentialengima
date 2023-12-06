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
    - [Contributing](#contributing)
    - [Test](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${answers.installation}
    
    ##Usage
    `
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter Project Title'
        },
    ])