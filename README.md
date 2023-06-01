# Automation Testing with Cypress

This repository contains automated test scripts written in JavaScript using Cypress for testing the web application located at [https://rahulshettyacademy.com/AutomationPractice/](https://rahulshettyacademy.com/AutomationPractice/).

## Test Scenarios

The test scripts cover the following scenarios:

### Radio buttons

- Click on radio button 3 and validate that only 1 radio button is checked.
- Click on radio button 2 and validate that button 2 is the only checked button.

### Suggestion

- Type in the field 'South' and select 'South Africa' from the list of options.
- Clear the field and type 'Republic' and select the first option listed.

### Checkboxes

- Check all the checkboxes and validate that they are all checked.
- Uncheck the first checkbox and validate that the other two remain checked.

### Show / hide

- Click on the hide button and validate that the element is hidden.
- Click on the show button and validate that the hidden element is shown.

### Web Table Fixed header

- Validate that the Amount for 'Joe Postman' from 'Chennai' has an amount of 46.
- Validate that the total amount collected is 296.

### iFrame

- Validate that the page has an iframe.
- Interact with any element within the iframe.

## Getting Started

Follow these instructions to set up the project and run the automated tests locally.

### Prerequisites

Make sure you have the following dependencies installed:

- Node.js: [https://nodejs.org](https://nodejs.org)

### Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/automation-testing-cypress.git


Navigate to the project directory:

bash
Copy code
cd automation-testing-cypress
Install the required dependencies:

bash
Copy code
npm install
Running the Tests
To run the automated tests using Cypress, use the following command:

bash
Copy code
npm run cy:run
This will execute the test scripts in the Cypress test runner.

Recording a Video
To record a video of a successful test run, use the following command:

bash
Copy code
npm run cy:run:video
The video will be saved in the videos folder.

Contributing
Contributions are welcome! If you find any issues or want to enhance the test scripts, feel free to submit a pull request. Please follow these guidelines when contributing.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
The web application used for testing is provided by Rahul Shetty Academy.
