
function mul(a, b) {
  return a * b;
};

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

function bind(func, context /*, args*/) {
  var bindArgs = [].slice.call(arguments, 2); // (1)
  function wrapper() {                        // (2)
    var args = [].slice.call(arguments);
    var unshiftArgs = bindArgs.concat(args);  // (3)
    return func.apply(context, unshiftArgs);  // (4)
  }
  return wrapper;
}
