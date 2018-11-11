const utils = require('./utils.js');

it('Should add two number', () => {
  let res = utils.add(33, 11);

  if(res !== 44){
    throw new Error(`Expected 44, but got ${res}`);
  }
});

it('Should square a number', () => {
  let res = utils.square(3);

  if(res !== 9){
    throw new Error(`Expected 9, but got ${res}`);
  }
});
