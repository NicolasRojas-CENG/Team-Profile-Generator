const Intern = require('../lib/Intern');

describe('Testing the creation and methods of the Intern object', () => {
    test('Creates an intern object', () => { // Setting up the test.
        const intern = new Intern('Name', 3, "email@hotmail.com", "UofT"); //Creating the object that we want to test.
        expect(intern.name).toBe('Name'); //Things we want to test.
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.school).toEqual(expect.any(String));
        expect(intern.email).toBe("email@hotmail.com");
    });

    test('Gets intern\'s name', () => {
        const intern = new Intern('Name', 3, "email@hotmail.com", "UofT");
        expect(intern.getName()).toEqual('Name');
    });

    test('gets intern\'s id', () => {
        const intern = new Intern('Name', 3, "email@hotmail.com", "UofT");
        expect(intern.getId()).toEqual(expect.any(Number));
    });

    test('gets intern\'s email', () => {
        const intern = new Intern('Name', 3, "email@hotmail.com", "UofT");
        expect(intern.getEmail()).toEqual('email@hotmail.com');
    });

    test("gets intern's role", () => {
        const intern = new Intern('Name', 3, "email@hotmail.com", "UofT");
        expect(intern.getRole()).toEqual('Intern');
    });

    test("gets intern's UofT username", () => {
        const intern = new Intern('Name', 3, "email@hotmail.com", "UofT");
        expect(intern.getSchool()).toEqual(expect.any(String));
    });
});