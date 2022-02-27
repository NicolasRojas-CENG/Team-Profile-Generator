class Employee {
    constructor (name, id){
        this.name = name;
        this.id = id;
        this.email = `${name}@work.ca`;
    }
    getName = function () {
        return this.name;
    };
    getId = function () {
        return this.id;
    };
    getEmail = function () {
        return this.email;
    };
    getRole = function () {
        return "Employee";
    };
}

module.exports = Employee;