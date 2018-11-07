
//【继承】
//1【混入式继承】
// for in
// 使用for in遍历对象1的属性，将所有的属性添加到另外一个对象2上
// 称 对象2 继承自 对象1
//2【原型继承】
// * 利用对象的动态特性，为原型对象添加成员
// * 直接替换原型对象
//     1.替换前的对象，在替换之后，所有的成员都丢失
//     2.替换原型对象的时候，需要手动去指定原型对象的construtor属性
// * 利用混入给原型对象添加成员
//3【经典继承】
// var 对象1 = Object.create(对象2);
// 创建的对象1继承自对象2
// Object.create方法存在兼容性问题
// 如何解决？
// 1.检测浏览器是否支持Object.create方法，如果不支持，直接手动给Object添加create方法
// 2.自定义函数，在函数内部判断浏览器是否支持Object.create方法，如果不支持，则手动创建对象返回，否则直接调用
// function create(obj){
//     if(Object.create){
//         return Object.create(obj);
//     }else{
//         function F(){
//         }

//         F.prototype = obj;
//         return new F();
//     }
// }


//【混入式继承】
//当前没有的属性和方法，从别处取
var p = {}
var obj = {
    name :"csxiaoyao",
    age : 18,
    sayHello :function () {
        console.log("Hello world");
    }
}
for(var k in obj){
    p[k] = obj[k];
}
console.log(p);

//【原型继承】
//利用原型中的成员可以和其相关的对象共享这一特性，可以实现继承
//这种实现继承的方式，就叫做原型继承
function Person(name, age){
    this.name = name;
    this.age = age;
}
//1.给原型对象中添加成员（通过对象的动态特性）不是严格意义上的继承
Person.prototype.sayHello = function () {
    console.log("sayHello1");
}
// p1对象继承原型
var p1 = new Person("csxiaoyao",25);
p1.sayHello();//sayHello1

//2.直接替换原型对象
var parent = {
    sayHello : function () {
        console.log("sayHello2");
    }
}
Person.prototype = parent;
var p2 = new Person("csxiaoyao",25);
p2.sayHello();//sayHello2

