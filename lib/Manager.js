const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor (name, id, officeNumber) {
        super(name, id)
        this.officeNumber = officeNumber
    }
    getRole = function () {
        return "Manager";
    };

    getOfficeNumber = function () {
        return this.officeNumber;
    }
}

module.exports = Manager;