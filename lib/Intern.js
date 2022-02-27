const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor (name, id, school) {
        super(name, id);
        this.school = school;
    }
    getRole = function () {
        return "Intern";
    };

    getSchool = function () {
        return this.school;
    }
}

module.exports = Intern;