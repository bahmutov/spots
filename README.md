# spots

> Partial function argument binding with placeholders

[![NPM][spots-icon] ][spots-url]

[![Build status][spots-ci-image] ][spots-ci-url]
[![dependencies][spots-dependencies-image] ][spots-dependencies-url]
[![devdependencies][spots-devdependencies-image] ][spots-devdependencies-url]

**spots** makes it simple to bind some arguments, leaving the rest free.

```js
var S = require('spots');
function sub(a, b) {
  return a - b;
}
// use library itself as a placeholder
var minus1 = S(sub, S, 1);
// minus1 = sub(_, 1) function
minus1(9); // 8, same as sub(9, 1);
```

It can apply more than 1 argument.

```js
function add4(a, b, c, d) { return a + b + c + d; }
var applyEven = S(add4, S, 1, S, 2);
applyEven(-1, -2); // 0
// equivalent to add4(-1, 1, -2, 2);
```

It works very nice to solve [JavaScript Madness][madness] problem.

```js
['1', '2', '3'].map(S(parseInt, S, 10));
// returns [1, 2, 3]
```

You can use **spots** with [functional-pipeline][fp] to apply arguments *to the individual steps*.

```js
var fp = require('functional-pipeline');
function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
fp(
  S(sub, 1, S),
  S(add, S, 20)
)(3); // 18
// same as
// add( sub(1, 3), 20 )
```

Real world example [chdir-promise index.js](https://github.com/bahmutov/chdir-promise/blob/master/index.js)
where we use *spots* to pass argument to `Q.try` method.

If there is a context (like filling some arguments to a method), you can bind to the object after applying **spots**

```js
var calc = {
  name: 'calc',
  add4: function (a, b, c, d) {
    return this.name + ' ' + a + b + c + d;
  }
};
var add_2_4 = S(calc.add4, S, 2, S, 4).bind(calc);
add_2_4(1, 3); // calc 10
```

Related: 

* [Point-free is not pointless](http://glebbahmutov.com/blog/point-free-programming-is-not-pointless/)
* [Selective application](http://glebbahmutov.com/blog/selective-partial-application/)
* [functional-pipeline][fp]
* [heroin](https://github.com/bahmutov/heroin)

Available on NPM and bower under name `spots`.

### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/spots/issues) on Github

## MIT License

Copyright (c) 2014 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[spots-icon]: https://nodei.co/npm/spots.png?downloads=true
[spots-url]: https://npmjs.org/package/spots
[spots-ci-image]: https://travis-ci.org/bahmutov/spots.png?branch=master
[spots-ci-url]: https://travis-ci.org/bahmutov/spots
[spots-dependencies-image]: https://david-dm.org/bahmutov/spots.png
[spots-dependencies-url]: https://david-dm.org/bahmutov/spots
[spots-devdependencies-image]: https://david-dm.org/bahmutov/spots/dev-status.png
[spots-devdependencies-url]: https://david-dm.org/bahmutov/spots#info=devDependencies

[madness]: https://github.com/raganwald-deprecated/homoiconic/blob/master/2013/01/madness.md
[fp]: https://github.com/bahmutov/functional-pipeline
