const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor (name, id, github) {
        super(name, id);
        this.github = github;
    }
    getRole = function () {
        return "Engineer";
    };

    getGethub = function () {
        return this.github;
    }
}

module.exports = Engineer;