(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define('spots', [], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['spots'] = factory();
  }
}(this, function () {

/* jshint -W098 */
function spots(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var moreArgs = Array.prototype.slice.call(arguments, 0);
    var combinedArgs = [];
    args.forEach(function (arg) {
      if (arg === spots) {
        combinedArgs.push(moreArgs.shift());
      } else {
        combinedArgs.push(arg);
      }
    });
    // copy the rest of arguments (if any);
    combinedArgs.push.apply(combinedArgs, moreArgs);
    return fn.apply(null, combinedArgs);
  };
}

return spots;

}));
