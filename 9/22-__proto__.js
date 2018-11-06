
function Person() {

}
//1.通过构造函数访问原型
Person.prototype;
Person.prototype.msg = "msg";
var p = new Person();

//2.通过对象访问原型
//__proto__属性是一个非标准的属性,为了保证通用性,这个属性不推荐使用
//__proto__属性主要用来做调试
console.log(p.__proto__);//object
p.__proto__.sayHello = function () {
    console.log("sayHello")
}
p.sayHello();//sayHello

