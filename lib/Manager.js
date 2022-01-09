// imports Employee page info
const Employee = require('./Employee');

// manager constructor plus employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    // returns role from getRole
    getRole () {
        return "Manager";
    }
}
 
module.exports = Manager;
