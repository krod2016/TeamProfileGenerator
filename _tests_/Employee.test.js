const Employee = require('./Employee');

//create Employee card (name, employee id, email, office number)
test ('Employee info', () => {
  const Employee = new Employee ('Jacob', 003, 'jrodriguez@gmail.com', 3);
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

//getId coding here
test('employee ID', () => {
  const employee = new Employee ('Jacob', 003, 'jrodriguez@gmail.com', 3);
  expect(employee.getId()).toEqual(expect.any(Number));
});

//getemail coding here
test('employee email', () => {
  const employee = new Employee ('Jacob', 003, 'jrodriguez@gmail.com', 3);
  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//getName coding here
test('employee name', () => {
  const employee = new Employee ('Jacob', 003, 'jrodriguez@gmail.com', 3);
  expect(employee.getName()).toEqual(expect.any(String));
});

//getRole coding here
test('employee role', () => {
  const employee = new Employee ('Jacob', 003, 'jrodriguez@gmail.com', 3);
  expect(employee.getRole()).toEqual("Employee");
}); 

module.exports = function() {};


