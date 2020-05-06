// TODO: Write code to define and export the Employee class

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
  
  Employee.prototype.getName = function getName() {
    return this.name;
  };
    
  Employee.prototype.getId = function getId() {
    return this.id;
  };
    
  Employee.prototype.getEmail = function getEmail() {
    return this.email;
  };
    
  Employee.prototype.getRole = function getRole() {
    return this.role;
  };
  
  module.exports = Employee;
  