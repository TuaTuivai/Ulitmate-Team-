const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const genHTML = require('./src/genHTML.js');

const teamArray = [];

function init() {
inquirer
.prompt([
{
type: 'input',
name: 'name',
message: "Please enter manager's name:",
},
{
type: 'input',
name: 'employeeID',
message: 'What is your employee ID:',
},
{
type: 'input',
name: 'email',
message: 'What is your email address:',
},
{
type: 'input',
name: 'officeNumber',
message: 'What is your office number:',
},
])
.then((answers) => {
const manager = new Manager(
answers.name,
answers.employeeID,
answers.email,
answers.officeNumber
);
teamArray.push(manager);
teamMenu();
});
}

function teamMenu() {
inquirer
.prompt([
{
type: 'list',
name: 'menu',
message: 'Please choose one of the following options:',
choices: ['Add Engineer', 'Add Intern', 'My Team is Complete!'],
},
])
.then((answers) => {
switch (answers.menu) {
case 'Add Engineer':
addEngineer();
break;
case 'Add Intern':
addIntern();
break;
default:
createTeam();
}
});
}

function addEngineer() {
inquirer
.prompt([
{
type: 'input',
name: 'name',
message: "Please enter engineer's name:",
},
{
type: 'input',
name: 'employeeID',
message: 'What is their employee ID:',
},
{
type: 'input',
name: 'email',
message: 'What is their email address:',
},
{
type: 'input',
name: 'githubUsername',
message: 'What is their Github username:',
},
])
.then((answers) => {
const engineer = new Engineer(
answers.name,
answers.employeeID,
answers.email,
answers.githubUsername
);
teamArray.push(engineer);
teamMenu();
});
}

function addIntern() {
inquirer
.prompt([
{
type: 'input',
name: 'name',
message: "Please enter intern's name:",
},
{
type: 'input',
name: 'employeeID',
message: 'What is their employee ID:',
},
{
type: 'input',
name: 'email',
message: 'What is their email address:',
},
{
type: 'input',
name: 'school',
message: 'What is the school they are attending:',
},
])
.then((answers) => {
const intern = new Intern(
answers.name,
answers.employeeID,
answers.email,
answers.school
);
teamArray.push(intern);
teamMenu();
});
}

function createTeam() {
fs.writeFile('./src/index.html', genHTML(teamArray), (err) => {
if (err) console.log(err);
else {
console.log('File has been created!');
console.log('Team members:', teamArray);
}
});
}

init();

