const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and office number property', () => {
      const manager = new Manager('John', 123, 'john@example.com', 101);

      expect(manager.name).toEqual('John');
      expect(manager.id).toEqual(123);
      expect(manager.email).toEqual('john@example.com');
      expect(manager.officeNumber).toEqual(101);
    });
  });

  describe('Methods', () => {
    it('should return the name of the manager', () => {
      const manager = new Manager('John', 123, 'john@example.com', 101);
      expect(manager.getName()).toEqual('John');
    });

    it('should return the id of the manager', () => {
      const manager = new Manager('John', 123, 'john@example.com', 101);
      expect(manager.getId()).toEqual(123);
    });

    it('should return the email of the manager', () => {
      const manager = new Manager('John', 123, 'john@example.com', 101);
      expect(manager.getEmail()).toEqual('john@example.com');
    });

    it('should return the office number of the manager', () => {
      const manager = new Manager('John', 123, 'john@example.com', 101);
      expect(manager.getOfficeNumber()).toEqual(101);
    });

    it('should return the role of the manager', () => {
      const manager = new Manager('John', 123, 'john@example.com', 101);
      expect(manager.getRole()).toEqual('Manager');
    });
  });
});
