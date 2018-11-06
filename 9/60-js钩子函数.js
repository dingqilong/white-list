  
// 钩子一  
var load_func_init = function() {
  alert("load_func_init");
}
// 钩子二  
var load_func_scroll = function() {
  alert("load_func_scroll");
}

// 创建一个JS钩子，处理钩子的对象
var Hook = (function() {
  // 返回一个对象，这是一个的钩子对象  
  return {
    init: function(parameter) {
      this.callHook(parameter);
    },
    callHook: function(parameter) {
      var s = parameter + "_func";
      var f = [];
      for (var h in window) {
        if (h.indexOf(s) != 0) continue;
        f.push(h);
      }
      this.actionHook(f);
    },
    actionHook: function(array_hook) {
      var _s, _func, _array = array_hook || [],
        len = _array.length;
      if (0 === len) return;
      for (var i = 0; i < len; i++) {
        _s = _array[i];
        _func = window[_s];
        if (_func === undefined) continue;
        _func.apply();
      }
    }
  }
}());
onload = function() {
  // 页面加载完成后使用钩子（调用）
  Hook.init("load");
}

