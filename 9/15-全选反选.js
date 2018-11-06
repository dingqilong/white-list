
window.onload = function () {
	// 思路：
	// 1. 获取上面的input按钮绑定事件，判断checked属性，如果是true，下面的全部变成true，false同理
	// 2. 为下面的每个input绑定事件判断所有的按钮checked属性值，如果有一个是false，上面的input为false，否则为true
	// 第一步：获取作用域和相关操作对象
	var topInp = document.getElementById("theadInp");
	var tbody = document.getElementById("tbody");
	var botInpArr = tbody.getElementsByTagName("input");
	// 第二步：绑定事件1，只绑定一个对象
	topInp.onclick = function () {
	    for(var i=0;i<botInpArr.length;i++){
	        botInpArr[i].checked = this.checked;
	    }
	}
	// 第三步：绑定事件2，绑定下面所有对象
	for(var i=0;i<botInpArr.length;i++){
	    botInpArr[i].onclick = function () {
	        var bool = true;
	        for(var j=0;j<botInpArr.length;j++){
	            if(botInpArr[j].checked === false){
	                bool = false;
	            }
	        }
	        topInp.checked = bool;
	    }
	}
}
