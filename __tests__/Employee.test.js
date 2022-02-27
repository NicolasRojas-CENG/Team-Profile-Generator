const Employee = require('../lib/Employee');

describe('Testing the creation and methods of the Employee object', () => {
    test('Creates an employee object', () => { // Setting up the test.
        const employee = new Employee('Name', 1, "email@hotmail.com"); //Creating the object that we want to test.
        expect(employee.name).toBe('Name'); //Things we want to test.
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toBe("email@hotmail.com");
    });

    test('Gets employee\'s name', () => {
        const employee = new Employee('Name', 1, "email@hotmail.com");
        expect(employee.getName()).toEqual('Name');
    });

    test('gets employee\'s id', () => {
        const employee = new Employee('Name', 1, "email@hotmail.com");
        expect(employee.getId()).toEqual(expect.any(Number));
    });

    test('gets employee\'s email', () => {
        const employee = new Employee('Name', 1, "email@hotmail.com");
        expect(employee.getEmail()).toEqual('email@hotmail.com');
    });

    test("gets employee's role", () => {
        const employee = new Employee('Name', 1, "email@hotmail.com");
        expect(employee.getRole()).toEqual('Employee');
    });
})