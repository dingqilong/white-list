
//注册事件的方式
//1.  ele.on事件类型 = function(){}
//2.  addEventListener(事件类型,事件处理函数,useCapture)  第三个参数默认是false，冒泡阶段执行
//3.  attachEvent(事件类型，事件处理函数)

//1.在注册事件的时候，判断浏览器的注册事件的方式，然后直接使用该方式进行注册事件
    //复用性太差
//2.将注册事件的代码封装到一个函数中
    //每次调用该函数，都会进行浏览器能力检测
//3.在函数中返回函数，让外部函数只执行一次，判断也就只会执行一次
    //使用函数内创建的函数返回给外界，就可以重复使用该函数，进行事件的注册

//封装成函数，问题是每次都会判断
// function registeEvent(target, type, handler){
//    if(target.addEventListener){
//        target.addEventListener(type,handler)
//    }else if(target.attachEvent){
//        target.attachEvent("on"+type,handler)
//    }else{
//        target["on"+type] = handler;
//    }
// }

//1、注册的事件的处理函数中的，this指向不一致
//使用addEventListener的方式注册的点击事件的回调函数中的 this 指向 target
//使用attachEvent的方式注册点击事件的回调函数中的 this 指向 window

//2、3种注册事件的方式中，回调函数内获取事件对象的方式也不一致
//若要统一，在attachEvent注册方式中，手动给handler传递window.event
function createEventRegister(){
    if(window.addEventListener){
        return function(target, type, handler){
            // this ---> window
            target.addEventListener(type,handler)
        }
    }else if(window.attachEvent){
        return function(target, type, handler) {
            target.attachEvent("on" + type, function(){
                handler.call(target, window.event);
            })
        }
    }else{
        return function(target, type, handler) {
            target["on" + type] = handler;
        }
    }
}
var registeEvent = createEventRegister();
window.onload =function () {
    var div = document.getElementById("div");
    registeEvent(div,"click",function(e){
        console.log(e);//MouseEvent 当前的事件对象
        console.log(this);//<div id="div">click</div> 当前点击的对象
        //this--->该事件的触发对象
        alert("sunshine");
    });
}
//通用
// div.onclick = function(){};
//ie9以上支持
// div.addEventListener("click",function(e){})
//ie9（不包括9）以下支持
// div.attachEvent("onclick".function(){})

