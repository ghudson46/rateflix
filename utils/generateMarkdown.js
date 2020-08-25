// function to generate markdown for README
var generateMarkdown = function(data) {

  // license markdown
  const licenses = {
    MIT: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
      badge: "https://img.shields.io/badge/License-MIT-yellow.svg"
    },
    GPL: {
      name: "GPL",
      url: "https://www.gnu.org/licenses/gpl-3.0.en.html",
      badge: "https://img.shields.io/badge/License-GPLv3-blue.svg"
    },
    Apache: {
      name: "Apache",
      url: "https://www.apache.org/licenses/LICENSE-2.0",
      badge: "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
    },
    Other: {
      name: "Unspecified (user specific)",
      url: "",
      badge: ""
    }
  }

  // license switch
  let license = null;
  switch (data.license){
    case "1": license = licenses.MIT; break;
    case "2": license = licenses.GPL; break;
    case "3": license = licenses.Apache; break;
    default: 
    case "4": license = licenses.Other; break;
  }

  // markdown
  return `# ${data.title}
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ## Description
  ![badge](${license.badge})
  [App Link](${data.deployed})
  ![App Img](${data.appImg})
  ${data.description}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  [${license.name}](${license.url})
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  [GitHub: ${data.gitUser}](${data.gitLink})
  [Email: ${data.email}](${data.email})
  Contact me! ${data.contactMe}
  `;
}

module.exports = {
  genMarkdown : generateMarkdown
}