const { log } = require('console');
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
    - [Contributing](#contributing)
    - [Questions](#questions)
    
    ## Installation
    ${answers.installation}
    
    ##Usage
    ${answers.usage}

    ## License
    ![License Badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

    ##Tests
    ${answers.tests}

    ##Contributing
    ${answers.contributing}

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
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions:',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contributing factors:',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter Github username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email'
        },
    ])
    .then((answers)=> {
        const READMEContent = generateREADME(answers);

        fs.writeFile('README.md', READMEContent, (err)=> {
            if (err) throw err;
            console.log('README.MD created successfully!');
        });
    });