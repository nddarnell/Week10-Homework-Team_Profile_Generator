// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

function Manager(name, id, email, officeNumber) {
    Employee.call(this, name, id, email)
    this.role = "Manager";
    this.officeNumber = officeNumber;
  }
  Manager.prototype = Object.create(Employee.prototype)
    
  Manager.prototype.getOfficeNumber = function getOfficeNumber() {
    return this.officeNumber;
  };
  
  module.exports = Manager;