define(["require", "exports", "module", "system"], function(require, exports, module) {

exports.print = function () {
    var system = require("system");
    var stdio = system.stdio;
    stdio.print.apply(stdio, arguments);
};

exports.assert = function (guard, message) {
    if (guard) {
        console.log('PASS ' + message, 'pass');
    } else {
        console.error('FAIL ' + message, 'fail');
    }
};


});
    checkBetween36 = inBetween(3, 6);
  });

  it("возвращает фильтрa для значений в промежутке", function() {
    assert.isTrue(checkBetween36(5));
    assert.isFalse(checkBetween36(0));
  });
});


describe("filter", function() {

  it("фильтрует через func", function() {
    assert.deepEqual(filter(arr, function(a) {
      return a % 2 == 0;
    }), [2, 4, 6]);
  });

  it("не модифицирует исходный массив", function() {
    filter(arr, function(a) {
      return a % 2 == 0;
    });
    assert.deepEqual(arr, [1, 2, 3, 4, 5, 6, 7]);
  });

  it("поддерживает фильтр inBetween", function() {
    assert.deepEqual(filter(arr, inBetween(3, 6)), [3, 4, 5, 6]);
  });

  it("поддерживает фильтр inArray", function() {
    assert.deepEqual(filter(arr, inArray([1, 2, 3])), [1, 2, 3]);
  });

});