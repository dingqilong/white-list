
	  const inputs = document.querySelectorAll('.controls input');	  
	  
	  function handleUpdate() {
		  const suffix = this.dataset.sizing || ''; // 根据 data-sizing 获取参数的后缀
		  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // 设置页面 CSS 变量的值
		  document.getElementById(`code-${this.name}`).innerText = this.value + suffix; // 页面参数实时显示
	  }
	  
	  inputs.forEach( input => input.addEventListener('change', handleUpdate));
	  inputs.forEach( input => input.addEventListener('mousemove', handleUpdate)); // 在滑块拖动过程中也实时变化
	  
	  
//	  以下为跨浏览器事件处理及 forEach 兼容性处理
//	  var EventUtil = {
//		  addHandler : function(element, type, handler) {
//			  if (element.addEventListener) {
//				  element.addEventListener(type, handler, false);
//			  } else if (element.attachEvent) {
//				  element.attachEvent("on" + type, handler);
//			  } else {
//				  element["on" + type] = handler;
//			  }
//		  },
//		  
//		  removeHandler: function(element, type, handler) {
//			  if (element.removeEventListener) {
//				  element.removeEventListener(type, handler, false);
//			  } else if (element.detachEvent) {
//				  element.attachEvent("on" + type, handler);
//			  } else {
//				  element["on" + type] = null;
//			  }
//		  }
//	  };
//	  
//	  if (!NodeList.prototype.forEach) {
//    NodeList.prototype.forEach = function(fn, scope) {
//        for(var i = 0, len = this.length; i < len; ++i) {
//            fn.call(scope, this[i], i, this);
//        }
//    }
//};
//	  
//	  inputs.forEach( input => EventUtil.addHandler(input, 'change', handleUpdate));
//	  inputs.forEach( input => EventUtil.addHandler(input, 'mousemove', handleUpdate));
	 
	  
  