
var o={
m:function(){                        //对象中的方法m()
var self=this;                //将this值保存在一个变量中
console.log(this ===o);       //true
f();                    //对象中的函数f();
function f(){
console.log(this ===o);   //false this指全局变量（非严格模式），undefined（strict）
console.log(self===o);      //self指外部函数this值
}
}
}
o.m();
