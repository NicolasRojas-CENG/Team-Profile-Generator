//Importing different functions from other files/modules.
const inquirer = require('inquirer');
const generatePage = require('./src/html_template');
const writeFile = require('./src/generateSite');
const prompt = require('prompt-sync')();

const answerArray = [];
var count = 0;

const validateAnswerNums = checks => ({
    validate: input => {
        if (input === '') {
            return 'The answer must be a number above 0.'
        }
        return checks ? checks(input) : true
    },
    filter: input => {
        // clear the invalid input
        return (Number.isNaN(input) || Number(input) <= 0 ? '' : Number(input))
    },
})

//The array of the questions to be asked to the user.
const infoQuestions = [{
    name: 'project',
    message: 'Once you have read the instructions, press (Enter) to start building.\n',
    when: () => count == 0
},{
    type: 'input',
    name: 'employee',
    message: 'What is the name of the employee?',
    validate: testInput => {
        if (testInput) {
        return true;
        } else {
            console.log('You need to enter the name of the employee.\n');
        return false;
        }
    }
},{
    type: 'number',
    name: 'id',
    message: 'What is the employee\'s id number?',
    ...validateAnswerNums(),
  },{
    type: 'input',
    name: 'email',
    message: 'What is the employee\'s email?',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log('You need to enter the employee\'s email.\n');
        return false;
      }
    }
  },{
    type: 'list',
    name: 'role',
    message: 'What is the employee\'s role?',
    choices: ['Intern', 'Engineer', 'Manager'],
  },{
    type: 'input',
    name: 'school',
    message: 'What is the intern\'s school?',
    when: (answers) => answers.role == "Intern",
    validate: testInput => {
        if (testInput) {
            return true;
        } else {
            console.log('You need to enter the intern\'s school.\n');
            return false;
        }
    }
  },{
    type: 'input',
    name: 'github',
    message: 'What is the engineer\'s GetHub username?',
    when: (answers) => answers.role == "Engineer",
    validate: testInput => {
        if (testInput) {
            return true;
        } else {
            console.log('You need to enter the engineer\'s GetHub username.\n');
            return false;
        }
    }
  },{
    type: 'number',
    name: 'office',
    message: 'What is the manager\'s office number?',
    when: (answers) => answers.role == "Manager",
    ...validateAnswerNums(),
  },{
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
    }];

//Function used as a main.
function init() {
    instructionsPrompt();
    employeeInfoPrompt()
    // .then(html => {
    //     return writeFile(html);
    // }).then(writeFileResponse => {
    //     console.log(writeFileResponse);
    // }).catch(err => {
    //     console.log(err);
    // });
}

//Function used to start the actuall app or not.
function starInputPrompt() {
    const answer = prompt('Are you ready to start building your Team Profile? (Enter) to start, (q) to exit. ');
    (answer ? javascriptAbort() : init())
}

//Function used to display the instructions of use for the app.
const instructionsPrompt = () => {
    console.log("Please fill out the following form to build up your Team Profile.");
    console.log("You are required to fill each section.");
}

//Function used to start the prompts.
function employeeInfoPrompt(){
    console.log("");
    inquirer.prompt(infoQuestions).then(function (answers) {
        answerArray.push(answers);
        count++;
        const {confirmAddProject} = answers;
        console.log(answerArray);
        (confirmAddProject ? employeeInfoPrompt() : generatePage(answerArray))
    });
}

//Function used to end the app if the user chose to.
function javascriptAbort(){
    console.log("");
    console.log("------------------------------------------------");
    console.log("");
    console.log("The application has ended.");
    console.log("");
    //process.exit();
}

// Function used to ask the user to start the app.
starInputPrompt();