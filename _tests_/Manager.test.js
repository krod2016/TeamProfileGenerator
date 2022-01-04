const Manager = require('./Manager');

//create manager card (name, manager id, email, office number)
test ('manager info', () => {
  const manager = new manager ('Katrina', 001, 'katrinalaw@gmail.com', 1);
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
});

//getId coding here
test('manager ID', () => {
  const manager = new manager ('Katrina', 001, 'katrinalaw@gmail.com', 1);
  expect(manager.getId()).toEqual(expect.any(Number));
});

//getemail coding here
test('manager email', () => {
  const manager = new manager ('Katrina', 001, 'katrinalaw@gmail.com', 1);
  expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

//getName coding here
test('manager name', () => {
  const manager = new manager ('Katrina', 001, 'katrinalaw@gmail.com', 1);
  expect(manager.getName()).toEqual(expect.any(String));
});

//getRole coding here
test('manager role', () => {
  const manager = new manager ('Katrina', 001, 'katrinalaw@gmail.com', 1);
  expect(manager.getRole()).toEqual("manager");
}); 

// getRole coding starts here
test('gets manager', () => {
    const manager = new Manager ('Katrina', 001, 'katrinalaw@gmail.com', 1);
    expect(manager.getRole()).toEqual("Manager");
}); 

module.exports = function() {};