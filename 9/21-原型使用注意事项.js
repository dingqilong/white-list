

//【使用原型的注意事项】
//1.使用对象访问属性时，如果本身内找不到就去原型中查找
//使用点语法赋值的时候如果对象中存在该属性，并不会去原型中进行查找，对象中不存在该属性，就会给该对象新增该属性，而不会去修改原型中的属性
//2.如果在原型中的属性是引用类型的属性，那么所有的对象共享该属性，并且一个对象修改了该引用类型属性中的成员，其他对象也都会受影响
//3.一般情况下不会将属性放到原型对象中，一般情况下原型中只会放需要共享的方法

//非引用类型不共享
function Person(){

}
Person.prototype.name = "张三";
Person.prototype.age = 18;
var p1 = new Person();
console.log(p1.name);//张三
p1.name = "李四";
console.log(p1.name);//李四
var p2 = new Person();
console.log(p2.name);//张三

// 引用类型共享
var x = {
    name:"sunshine"
};
Person.prototype.nick = x;
var p3 = new Person();
console.log(p3.nick.name);//sunshine
Person.prototype.nick = {
    name:"csxiaoyao"
};
var p4 =new Person();
console.log(p4.nick.name);//csxiaoyao
console.log(p3.nick.name);//csxiaoyao

// 对象修改属性，不影响其他构造函数创建的对象
p4.nick = {

};
var p5 = new Person();
console.log(p5.nick.name);//csxiaoyao
console.log(p4.nick.name);//undefined
