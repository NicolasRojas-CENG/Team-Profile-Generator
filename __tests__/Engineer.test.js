const Engineer = require('../lib/Engineer');

describe('Testing the creation and methods of the Engineer object', () => {
    test('Creates an engineer object', () => { // Setting up the test.
        const engineer = new Engineer('Name', 3, "Name@hotmail.com", "GetHub"); //Creating the object that we want to test.
        expect(engineer.name).toBe('Name'); //Things we want to test.
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.github).toEqual(expect.any(String));
        expect(engineer.email).toBe("Name@hotmail.com");
    });

    test('Gets engineer\'s name', () => {
        const engineer = new Engineer('Name', 3, "Name@hotmail.com", "GetHub");
        expect(engineer.getName()).toEqual('Name');
    });

    test('gets engineer\'s id', () => {
        const engineer = new Engineer('Name', 3, "Name@hotmail.com", "GetHub");
        expect(engineer.getId()).toEqual(expect.any(Number));
    });

    test('gets engineer\'s email', () => {
        const engineer = new Engineer('Name', 3, "Name@hotmail.com", "GetHub");
        expect(engineer.getEmail()).toEqual('Name@hotmail.com');
    });

    test("gets engineer's role", () => {
        const engineer = new Engineer('Name', 3, "Name@hotmail.com", "GetHub");
        expect(engineer.getRole()).toEqual('Engineer');
    });

    test("gets engineer's GetHub username", () => {
        const engineer = new Engineer('Name', 3, "Name@hotmail.com", "GetHub");
        expect(engineer.getGethub()).toEqual(expect.any(String));
    });
});