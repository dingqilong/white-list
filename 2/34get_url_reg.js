
/***今天在写一个折叠的导航，点击导航，页面跳转，要求被点击的折叠列表呈现一个活动状态，由于导航被点击一次会被重新加载，所以无法捕捉到被点击的元素。
****我所采用的是把被点击的id通过url传到下一个页面，然后用js获取！所以写了一个用正则获取url的方法
****
****/
 function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return (r[2]); 
			return null; //返回参数值
        }
//通过这个函数传递url中的参数名就可以获取到参数的值，比如url为
//http://localhost/index.html?reurl=study
//我们要获取reurl的值，可以这样写：
var xx = getUrlParam('reurl');
console.log(xx);
