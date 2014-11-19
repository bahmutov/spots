require('lazy-ass');
var S = require('../index');
var fp = require('functional-pipeline');

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function length(x) {
  return x.length;
}

function pass(x) {
  return x;
}

describe('spots', function () {

  it('is a function', function () {
    la(typeof S === 'function');
  });

  it('applies sub', function () {
    var minus1 = S(sub, S, 1);
    la(minus1(9) === 8);
  });

  it('fully applies', function () {
    var fn = S(add, 10, 5);
    la(typeof fn === 'function');
    la(fn() === 15);
  });

  it('partially applies add', function () {
    var sum = S(add, S, 10)(1);
    la(sum === 11);
  });

  it('partially applies add both', function () {
    var sum = S(add, S, S)(1, 3);
    la(sum === 4);
  });

  it('can pipe functions', function () {
    var result = fp(
      S(length, S),
      pass
    )('123');
    la(result === 3);
  });

  it('can pipe functions 2', function () {
    var result = fp(
      S(length, S),
      pass,
      pass,
      pass
    )('123');
    la(result === 3);
  });

  it('can pipe multiple adds', function () {
    var result = fp(
      S(sub, 1, S),
      S(add, S, 20)
    )(3);
    la(result === 18, result);
  });

  it('can pipe add', function () {
    var result = fp(
      S(length, S),
      S(add, 1, S),
      S(add, S, 20)
    )('123');
    la(result === 24);
  });

  it('pipes array iterator', function () {
    var result = ['1', '2', '3'].map(
        S(parseInt, S, 10)
      );
    la(result[0] === 1);
    la(result[1] === 2);
    la(result[2] === 3);
  });
});