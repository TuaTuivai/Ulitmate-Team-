const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const employees = [];

const mainMenu = () => {
    inquirer.prompt([{
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: [
            "Add a new employee",
            "Generate HTML",
            "Exit"
        ]
    }])
    .then(({action}) => {
        if(action == "Add a new employee") {
            addEmployee()
        } else if(action == "Generate HTML") {
            generateHTML()
        } else {
            console.log("Exiting!")
        }
    })
}

const addEmployee = () => {
    console.log("Add a new employee!")
    inquirer.prompt([{
        type: "list",
        message: "What type of employee?",
        name: "employeeType",
        choices: [
            "Manager",
            "Intern",
            "Engineer"
        ]
    }])
    .then(({employeeType}) => {
        console.log(employeeType)
        if(employeeType == "Manager") {
            createManager()
        } else if(employeeType == "Engineer") {
            createEngineer()
        } else if(employeeType == "Intern") {
            createIntern()
        } 
    })
}


const createManager = () => {
    // inquirer prommpt that will ask for
    // name
    // id
    // email
    // officeNumber

    // craete a new Manager using the manager class
    // var testManager = new Manager("John", 1, "john@mail.com", 12345);
    // employees.push(testManager)
    
    mainMenu();
}

const createEngineer = () => {
    
}

const createIntern = () => {
    
}

const generateHTML = () => {
    console.log("Generate the HTML")
}


mainMenu()