const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and gitHub property', () => {
      const engineer = new Engineer('John', 123, 'john@example.com', 'john-github');

      expect(engineer.name).toEqual('John');
      expect(engineer.id).toEqual(123);
      expect(engineer.email).toEqual('john@example.com');
      expect(engineer.gitHub).toEqual('john-github');
    });
  });

  describe('Methods', () => {
    it('should return the name of the engineer', () => {
      const engineer = new Engineer('John', 123, 'john@example.com', 'john-github');
      expect(engineer.getName()).toEqual('John');
    });

    it('should return the id of the engineer', () => {
      const engineer = new Engineer('John', 123, 'john@example.com', 'john-github');
      expect(engineer.getId()).toEqual(123);
    });

    it('should return the email of the engineer', () => {
      const engineer = new Engineer('John', 123, 'john@example.com', 'john-github');
      expect(engineer.getEmail()).toEqual('john@example.com');
    });

    it('should return the github username of the engineer', () => {
      const engineer = new Engineer('John', 123, 'john@example.com', 'john-github');
      expect(engineer.getGithub()).toEqual('john-github');
    });

    it('should return the role of the engineer', () => {
      const engineer = new Engineer('John', 123, 'john@example.com', 'john-github');
      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});
