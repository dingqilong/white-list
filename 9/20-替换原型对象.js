

//原型的使用方法
//1.利用对象的动态特性给原型对象添加成员
//2.直接替换原型对象

//直接替换原型对象会出现如下问题：
//替换前创建的对象的原型 和 替换后创建的对象的原型 不同
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
Person.prototype.sayHello = function () {
    console.log("sayHello");
}
var p1 = new Person("csxiaoyao", 18, "male");
p1.sayHello();//sayHello

//替换原型对象
Person.prototype = {
    msg : "替换原型对象后"
};
var p2 = new Person("sunshine",18,"male");
p1.sayHello(); //sayHello
console.log(p2.msg); //替换原型对象后
// p2.sayHello(); //报错,找不到方法

