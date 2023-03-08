const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and school property', () => {
      const intern = new Intern('John', 123, 'john@example.com', 'UCLA');

      expect(intern.name).toEqual('John');
      expect(intern.id).toEqual(123);
      expect(intern.email).toEqual('john@example.com');
      expect(intern.school).toEqual('UCLA');
    });
  });

  describe('Methods', () => {
    it('should return the name of the intern', () => {
      const intern = new Intern('John', 123, 'john@example.com', 'UCLA');
      expect(intern.getName()).toEqual('John');
    });

    it('should return the id of the intern', () => {
      const intern = new Intern('John', 123, 'john@example.com', 'UCLA');
      expect(intern.getId()).toEqual(123);
    });

    it('should return the email of the intern', () => {
      const intern = new Intern('John', 123, 'john@example.com', 'UCLA');
      expect(intern.getEmail()).toEqual('john@example.com');
    });

    it('should return the school of the intern', () => {
      const intern = new Intern('John', 123, 'john@example.com', 'UCLA');
      expect(intern.getSchool()).toEqual('UCLA');
    });

    it('should return the role of the intern', () => {
      const intern = new Intern('John', 123, 'john@example.com', 'UCLA');
      expect(intern.getRole()).toEqual('Intern');
    });
  });
});
