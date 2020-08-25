// generate markdown 
var generateMarkdown = data => {

  // licenses
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
    BSD: {
      name: "BSD",
      url: "https://opensource.org/licenses/BSD-3-Clause",
      badge: "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
    }
     
  }

  // license switch
  let license = null;
  switch(data.license) {
    case "1": license = licenses.MIT; break;
    case "2": license = licenses.GPL; break;
    case "3": license = licenses.Apache; break;
    default:
    case "4": license = licenses.BSD; break;
  }

  // markdown
  return `# ${data.title}
  
  ## Table of Contents
  - [Description] (#Description)
  - [Installation] (#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description
  ![badge] (${license.badge})
  [App Link] (${data.deployed})
  ![App IMG] (${data.appImg})

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
  [GitHub: ${data.username}](${data.profilegi})
  [Email: ${data.email}](${data.email})
  Contact me! ${data.contact}

  `;

}

module.exports = {
  genMarkdown : generateMarkdown
}

