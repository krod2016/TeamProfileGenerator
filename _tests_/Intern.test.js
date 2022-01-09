const Intern = require('./Intern');

//create intern card (name, intern id, email, office number)
test ('intern info', () => {
  const intern = new intern ('Eva', 005, 'ebena234@yahoo.com', 'USU');
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
});

//getId coding here
test('intern ID', () => {
  const intern = new intern ('Eva', 005, 'ebena234@yahoo.com', 'USU');
  expect(intern.getId()).toEqual(expect.any(Number));
});

//getemail coding here
test('intern email', () => {
  const intern = new intern ('Eva', 005, 'ebena234@yahoo.com', 'USU');
  expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

//getName coding here
test('intern name', () => {
  const intern = new intern ('Eva', 005, 'ebena234@yahoo.com', 'USU');
  expect(intern.getName()).toEqual(expect.any(String));
});

// getSchool coding here
test('gets intern school', () => {
  const intern = new Intern ('Eva', 005, 'ebena234@yahoo.com', 'USU');
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// getRole coding here
test('gets intern role', () => {
  const intern = new Intern ('Eva', 005, 'ebena234@yahoo.com', 'USU');
  expect(intern.getRole()).toEqual("Intern");
});

module.exports = function() {};




