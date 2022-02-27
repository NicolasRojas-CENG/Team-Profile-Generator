//Importing different functions from other files/modules.
const inquirer = require('inquirer');
const generatePage = require('./src/js/html_template');
const prompt = require('prompt-sync')();
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

//Variable where the user's answers are saved. Array of Objects.
const answerArray = [];

//Function used to validate the number prompts. This is to avoid the Nan output.
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

//The list of arrays of the questions to be asked to the user.
const internQuestions = [{
    type: 'input',
    name: 'employee',
    message: 'What is the name of the intern?',
    validate: testInput => {
        if (testInput) {
        return true;
        } else {
            console.log('You need to enter the name of the intern.\n');
        return false;
        }
    }
},{
    type: 'number',
    name: 'id',
    message: 'What is the intern\'s id number?',
    ...validateAnswerNums(),
  },{
    type: 'input',
    name: 'email',
    message: 'What is the email of the intern?',
    validate: testInput => {
        if (testInput) {
        return true;
        } else {
            console.log('You need to enter the email of the intern.\n');
        return false;
        }
    }
},{
    type: 'input',
    name: 'school',
    message: 'What is the intern\'s school?',
    validate: testInput => {
        if (testInput) {
            return true;
        } else {
            console.log('You need to enter the intern\'s school.\n');
            return false;
        }
    }
},{
    type: 'list',
    name: 'next',
    message: 'Do you want to add another employee?',
    choices: ['Intern', 'Engineer', 'None'],
}]
const engineerQuestions = [{
    type: 'input',
    name: 'employee',
    message: 'What is the name of the engineer?',
    validate: testInput => {
        if (testInput) {
        return true;
        } else {
            console.log('You need to enter the name of the engineer.\n');
        return false;
        }
    }
},{
    type: 'number',
    name: 'id',
    message: 'What is the engineer\'s id number?',
    ...validateAnswerNums(),
  },{
    type: 'input',
    name: 'email',
    message: 'What is the email of the engineer?',
    validate: testInput => {
        if (testInput) {
        return true;
        } else {
            console.log('You need to enter the email of the engineer.\n');
        return false;
        }
    }
},{
    type: 'input',
    name: 'gethub',
    message: 'What is the engineer\'s GetHub username?',
    validate: testInput => {
        if (testInput) {
            return true;
        } else {
            console.log('You need to enter the engineer\'s GetHub username.\n');
            return false;
        }
    }
  },{
    type: 'list',
    name: 'next',
    message: 'Do you want to add another employee?',
    choices: ['Intern', 'Engineer', 'None'],
}]
const managerQuestions = [{
    name: 'project',
    message: 'Once you have read the instructions, press (Enter) to start building.\n',
    //when: () => count == 0
},{
    type: 'input',
    name: 'employee',
    message: 'What is the name of the team manager?',
    validate: testInput => {
        if (testInput) {
        return true;
        } else {
            console.log('You need to enter the name of the team manager.\n');
        return false;
        }
    }
},{
    type: 'number',
    name: 'id',
    message: 'What is the manager\'s id number?',
    ...validateAnswerNums(),
  },{
    type: 'input',
    name: 'email',
    message: 'What is the email of the manager?',
    validate: testInput => {
        if (testInput) {
        return true;
        } else {
            console.log('You need to enter the email of the manager.\n');
        return false;
        }
    }
},{
    type: 'number',
    name: 'office',
    message: 'What is the manager\'s office number?',
    ...validateAnswerNums(),
  },{
    type: 'list',
    name: 'next',
    message: 'Do you want to add another employee?',
    choices: ['Intern', 'Engineer', 'None'],
}];

//Function used as a main.
function init() {
    instructionsPrompt();
    employeeInfoPrompt()
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
    inquirer.prompt(managerQuestions).then(function (answers) {
        const {next} = answers;
        var object = classSelect(answers)
        answerArray.push(object);
        if (next == "Intern") {
            internPrompts();

        } else if (next == "Engineer") {
            engineerPromts();
        }
        else {
            generatePage(answerArray);
        }
    });
}

//Function used for the intern prompts.
function internPrompts() {
    inquirer.prompt(internQuestions).then(function (answers) {
        var object = classSelect(answers)
        answerArray.push(object);
        if (answers.next == "Intern") {
            internPrompts();
        }
        else if (answers.next == "Engineer") {
            engineerPromts();
        }
        else{
            generatePage(answerArray);
        }
    })
}

//Function used for the engineer prompts.
function engineerPromts() {
    inquirer.prompt(engineerQuestions).then(function (answers) {
        var object = classSelect(answers)
        answerArray.push(object);
        if (answers.next == "Intern") {
            internPrompts();
        }
        else if (answers.next == "Engineer") {
            engineerPromts();
        }
        else{
            generatePage(answerArray);
        }
    })
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

//Function used to create the objects.
function classSelect(answers) {
    if (answers.school) {
        const intern = new Intern(answers.employee, answers.id, answers.email, answers.school);
        return intern;
    }
    if (answers.gethub) {
        const engineer = new Engineer(answers.employee, answers.id,answers.email, answers.gethub);
        return engineer;
    }
    if (answers.office) {
        const manager = new Manager(answers.employee, answers.id,answers.email, answers.office);
        return manager;
    }
}