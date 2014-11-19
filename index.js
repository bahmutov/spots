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

module.exports = spots;

