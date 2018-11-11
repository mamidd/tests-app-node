const expect = require('expect');

const utils = require('./utils.js');

it('Should add two number', () => {
  let res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

it('Should square a number', () => {
  let res = utils.square(3);
  expect(res).toBe(9).toBeA('number');
});

it('Should verify firstname and lastname are set', () => {
  let user = {age: 28,location: 'Bari'};
  let res = utils.setName(user, 'Mario DeDonno');
  expect(res).toInclude({
    firstName: 'Mario',
    lastName: 'DeDonno'
  })
});


// it('Should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   // expect([2,3,4]).toInclude(4);
//   // expect([2,3,4]).toExclude(5);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelpia'
//   }).toInclude({
//     age: 25
//   });
// });
