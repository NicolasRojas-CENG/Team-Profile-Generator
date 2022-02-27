const Employee = require('../lib/Employee');

describe('Testing the creation and methods of the Employee object', () => {
    test('Creates an employee object', () => { // Setting up the test.
        const employee = new Employee('Name', 1); //Creating the object that we want to test.
        expect(employee.name).toBe('Name'); //Things we want to test.
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toBe("Name@work.ca");
    });

    test('Gets employee\'s name', () => {
        const employee = new Employee('Name', 1);
        expect(employee.getName()).toEqual('Name');
    });

    test('gets employee\'s id', () => {
        const employee = new Employee('Name', 1);
        expect(employee.getId()).toEqual(expect.any(Number));
    });

    test('gets employee\'s email', () => {
        const employee = new Employee('Name', 1);
        expect(employee.getEmail()).toEqual('Name@work.ca');
    });

    test("gets employee's role", () => {
        const employee = new Employee('Name', 1);
        expect(employee.getRole()).toEqual('Employee');
    });
})