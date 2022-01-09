const Engineer = require('./Engineer');

//create Engineer card (name, intern id, email, office number)
test ('Engineer info', () => {
  const Engineer = new Engineer ('John', 002, 'jn2012@aol.com', 2);
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
});

//getId coding here
test('engineer ID', () => {
  const engineer = new Employee ('John', 002, 'jn2012@aol.com', 2);
  expect(engineer.getId()).toEqual(expect.any(Number));
});

//getemail coding here
test('engineer email', () => {
  const engineer = new Engineer ('John', 002, 'jn2012@aol.com', 2);
  expect(engineer.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//getName coding here
test('engineer name', () => {
  const engineer = new Engineer ('John', 002, 'jn2012@aol.com', 2);
  expect(engineer.getName()).toEqual(expect.any(String));
});

//getRole coding here
test('engineer role', () => {
  const engineer = new Engineer ('John', 002, 'jn2012@aol.com', 2);
  expect(engineer.getRole()).toEqual("Engineer");
}); 

// getGithub coding here
test('gets github', () => {
    const engineer = new Engineer ('John', 002, 'github.com/jnr1234', 2);
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// getRole coding here
test('gets role of employee', () => {
    const engineer = new Engineer ('John', 002, 'jn2012@aol.com', 2);
    expect(engineer.getRole()).toEqual("Engineer");
});

module.exports = function() {};