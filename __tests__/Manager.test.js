const Manager = require('../lib/Manager');

describe('Testing the creation and methods of the Intern object', () => {
    test('Creates a manager object', () => { // Setting up the test.
        const manager = new Manager('Name', 3, 12); //Creating the object that we want to test.
        expect(manager.name).toBe('Name'); //Things we want to test.
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.officeNumber).toEqual(expect.any(Number));
        expect(manager.email).toBe("Name@work.ca");
    });

    test('Gets manager\'s name', () => {
        const manager = new Manager('Name', 3, 12);
        expect(manager.getName()).toEqual('Name');
    });

    test('gets manager\'s id', () => {
        const manager = new Manager('Name', 3, 12);
        expect(manager.getId()).toEqual(expect.any(Number));
    });

    test('gets manager\'s email', () => {
        const manager = new Manager('Name', 3, 12);
        expect(manager.getEmail()).toEqual('Name@work.ca');
    });

    test("gets manager's role", () => {
        const manager = new Manager('Name', 3, 12);
        expect(manager.getRole()).toEqual('Manager');
    });

    test("gets manager's office number", () => {
        const manager = new Manager('Name', 3, 12);
        expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
    });
});