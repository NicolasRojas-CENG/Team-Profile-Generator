const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
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