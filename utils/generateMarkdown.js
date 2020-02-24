
const Usage =(info)=>{
  if(info !== 'None'){
    return `This project is licensed under ${info} license.`
  }
  return ''
}

function generateMarkdown(data) {
  return `
# ${data.title}

![user badge](https://img.shields.io/badge/license-${encodeURI(data.license)}-blueviolet.svg)

## Description
  
${data.description}
  

## Table of Contents

* [Installation](#Installation)

* [Usage](#Usage)

* [Tests](#Tests)

* [Questions](#Questions)

## Installation

\`\`\`
${data.install}
\`\`\`

## Usage
  ${data.repo}
  ${Usage(data.license)}

## Tests

To run tests, run the command:

\`\`\`
${data.test}
\`\`\`

## Questions

<img src="${data.avatar_url}" style='border-radius: 16px' width='30' />

If you have any questions about the repo, open an issue or contact [${data.username}](${data.url}) directly at ${data.electronicmail}.

`;
}

module.exports = generateMarkdown;
