// imports Employee page
const Employee = require('./Employee');

// intern constructor plus employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // returns school
    getSchool () {
        return this.school;
    }

    // returns role from getRole
    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 