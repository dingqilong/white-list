
//参数赋值，简单数据类型传数值，复杂数据类型传地址
//简单数据类型
var num = 1;
fn1(num);
console.log(num);//1 值传递
function fn1(a){
	a *= 10;
}

//复杂数据类型
var obj = new Object();
obj.name = "csxiaoyao";
fn2(obj);
console.log(obj);// Object {name: "sunshine"}
function fn2(object){
	object.name = "sunshine";
}

var a = 1;
b = a;
b = 0;
alert(a);//1
var obj1 = new Object();
obj1.name = "csxiaoyao";
obj2 = obj1;
obj2.name = "sunshine";
alert(obj1.name);//sunshine

