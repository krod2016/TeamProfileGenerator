const Manager = require('./Manager');

//create Manager card
test ('Manager info', () => {
  const Manager = new Manager ('Katrina', 001, 'katrinalaw@gmail.com', 1);
  expect(employee.number).toEqual(expect.anyNumber);
});

// getRole coding starts here
test('gets employee', () => {
    const manager = new Manager ('Katrina', 001, 'katrinalaw@gmail.com', 1);

    expect(manager.getRole()).toEqual("Manager");
}); 

module.exports = function() {};