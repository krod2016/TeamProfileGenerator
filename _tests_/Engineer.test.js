const Engineer = require('./Engineer');

//create Engineer card
test ('Engineer info', () => {
  const Engineer = new Engineer ('John', 002, 'jn2012@aol.com', 2);
  expect(engineer.number).toEqual(expect.anyNumber);
});

module.exports = function() {};