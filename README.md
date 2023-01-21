# CodeHire: A Place for Coders and Jobs to Find Each Other

  [![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)
  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#test)
  - [License](#license)
  - [Questions](#questions)
  


## Description

This application is a site for coders looking for jobs, and employers to find potential new employees. New users are able to create a profile. Upon creation, they are prompted to select whether they are looking for work or looking to hire. Depending on which option they select, users will be able to either search for jobs or find employees by skill. In addition, users are able to share feedback on job postings, providing helpful information for other potential applicants.

This project was created as a part of the Rutgers University Full-Stack Coding Bootcamp. Technologies used in this project include `HTML5`, `CSS`, `JavaScript`, `MySQL`, `sequelize`, `Express.js` and `Handlebars.js`. 

## Installation

This site is hosted on `Heroku`. No installation is needed.

## Usage

The deployed website can be found [here](https://code-hire.herokuapp.com/).

### The website has input forms for the following purposes:
- Creating a user profile
- Searching for a job/ user
- Creating a job posting
- Creating a comment on a job posting

The data from all these entries is passed into a `MySQL` database through `sequelize`. This is a diagram demonstrating the relationships between the various data tables:

![Database overview image](./assets/images/schema.png)

## Contributions

This project was created by [Adam Aronson](https://github.com/aronson333) , [Connor Bottone](https://github.com/connorbottone) , [Sam Lerner](https://github.com/sam-lerner)  and [Justin Yi](https://github.com/inputName-jy) .

Thank you to Professor Joe Han and TAs Paul Cwik and Justyn Subrai for their guidance with this project. 

## Tests

Route testing was performed through `Insomnia`.

## License
This project is licensed under the MIT license.
    

## Questions
Please use the links in the [Contributions](#contributions) section to see more of our work and get in touch!