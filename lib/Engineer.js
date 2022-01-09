// imports info from Employee page
const Employee = require("./Employee");

// engineer constructor plus employee conductor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);
        this.github = github; 
    }

    // returns github
    getGithub () {
        return this.github;
    }

     // returns engineer from getRole
    getRole () {
        return "Engineer";
    }
}
 
module.exports = Engineer;