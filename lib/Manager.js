const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        // this.name = name;
        // this.id= id;
        // this.email = email;
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }
    
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;

// var testManager = new Manager("John", 1, "john@mail.com", 12345);

// console.log(testManager.getRole())