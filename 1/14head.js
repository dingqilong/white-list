
function timingDecorator(f) {
  return function() {
    var d = new Date();
    var result = f.apply(this, arguments);
    console.log("Функция заняла: " + (new Date - d) + "мс");
    return result;
  }
}
function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}
