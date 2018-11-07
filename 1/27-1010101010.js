
//1.【原型链概念】
//每个构造函数都有原型对象
//每个对象都会有构造函数
//每个构造函数的原型都是一个对象
//那么这个原型对象也会有构造函数
//那么这个原型对象的构造函数也会有原型对象
//这样就会形成一个链式的结构，称为原型链

//2.【原型链结构的基本形式】
function Person(name){
    this.name = name;
}
var p = new Person();

//p ---> Person.prototype ---> Object.prototype ---> null

// 对象和原型的成员关系
// function Person(){};
// var p = new Person();
// p对象中包含的成员有：Person.prototype中的成员和自身拥有成员
// Person.prototype中的成员有：Object.prototype的成员和自身的成员
// p对象可以访问Person.prototype和Object.prototype中的所有成员

//【属性搜索原则】
//1.当访问一个对象的成员的时候，会先在自身找有没有,如果找到直接使用，
//2.如果没有找到，则去当前对象的原型对象中去查找，如果找到了直接使用，
//3.如果没有找到，继续找原型对象的原型对象，如果找到了，直接使用
//4.如果没有找到，则继续向上查找，直到Object.prototype，如果还是没有，就报错

//原型继承概念
//通过修改原型链结构实现的继承，就叫做原型继承
