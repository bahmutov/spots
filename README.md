# spots

> Partial function argument binding with placeholders

[![Build status][spots-ci-image] ][spots-ci-url]
[![dependencies][spots-dependencies-image] ][spots-dependencies-url]
[![devdependencies][spots-devdependencies-image] ][spots-devdependencies-url]

**spots** makes it simple to bind some arguments, leaving the rest free.

```js
var S = require('spots');
function sub(a, b) {
  return a - b;
}
var minus1 = S(sub, S, 1);
// minus1 = sub(_, 1) function
minus1(9); // 8, same as sub(9, 1);
```

It works very nice to solve [JavaScript Madness][madness] problem.

```js
['1', '2', '3'].map(S(parseInt, S, 10));
// returns [1, 2, 3]
```

You can use **spots** with [functional-pipeline][fp] to apply some arguments *across all functions*.

```js
function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
fp(
  S(sub, 1, S),
  S(add, S, 20)
)(3); // 18
// same as
// add( sub(1, 3), 20 )
```

Related: 

* [functional-pipeline][fp]
* [Selective application](http://bahmutov.calepin.co/selective-partial-application.html)
* [heroin](https://github.com/bahmutov/heroin)

### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

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

[spots-ci-image]: https://travis-ci.org/bahmutov/spots.png?branch=master
[spots-ci-url]: https://travis-ci.org/bahmutov/spots
[spots-dependencies-image]: https://david-dm.org/bahmutov/spots.png
[spots-dependencies-url]: https://david-dm.org/bahmutov/spots
[spots-devdependencies-image]: https://david-dm.org/bahmutov/spots/dev-status.png
[spots-devdependencies-url]: https://david-dm.org/bahmutov/spots#info=devDependencies

[madness]: https://github.com/raganwald-deprecated/homoiconic/blob/master/2013/01/madness.md
[fp]: https://github.com/bahmutov/functional-pipeline
