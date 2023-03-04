const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, and email property', () => {
      const employee = new Employee('John', 123, 'john@example.com');

      expect(employee.name).toEqual('John');
      expect(employee.id).toEqual(123);
      expect(employee.email).toEqual('john@example.com');
    });
  });

  describe('Methods', () => {
    it('should return the name of the employee', () => {
      const employee = new Employee('John', 123, 'john@example.com');
      expect(employee.getName()).toEqual('John');
    });

    it('should return the id of the employee', () => {
      const employee = new Employee('John', 123, 'john@example.com');
      expect(employee.getId()).toEqual(123);
    });

    it('should return the email of the employee', () => {
      const employee = new Employee('John', 123, 'john@example.com');
      expect(employee.getEmail()).toEqual('john@example.com');
    });

    it('should return the role of the employee', () => {
      const employee = new Employee('John', 123, 'john@example.com');
      expect(employee.getRole()).toEqual('Employee');
    });
  });
});
