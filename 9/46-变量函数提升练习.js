

// function foo() {
//     var num = 123;
//     console.log(num); //123
// }
// foo();
// console.log(num); //报错 is not defined 没有定义
//提升后的代码
// function foo() {
//     var num;
//     num = 123;
//     console.log(num); //123
// }
// foo();
// console.log(num);

// var scope = "global";
// foo();
// function foo() {
//     console.log(scope); //undefined
//     var scope = "local";
//     console.log(scope); //local
// }
//提升后的代码
// var scope;
// function foo(){
//     var scope;
//     console.log(scope);
//     scope = "local";
//     console.log(scope);
// }
// scope = "global";
// foo();

//in 关键字 判断某个对象中是否有某个属性
// var a;
// function f1(){
//     if("a" in window){//查找的是函数外的a
//         var a = 10;//函数内提升
//     }
//     console.log(a);//10
// }
// f1();

// var foo = 1;
// function bar() {
//     if(!foo) {
//         var foo = 10;
//     }
//     alert(foo); //10
// }
// bar();
//提升后的代码
// var foo;
// function bar(){
//     var foo;
//     if(!foo) {
//         foo = 10;
//     }
//     alert(foo); //10
// }
// foo = 1;
// bar();

// function Foo() {
//    getName = function(){ alert(1); };
//    return this;
// }
// Foo.getName = function() { alert(2); };
// Foo.prototype.getName = function(){ alert(3); };
// var getName = function() { alert(4); };
// function getName(){ alert(5); }
// Foo.getName(); // 2
// getName(); // 4 函数表达式不提升
// Foo().getName(); // 1 调用函数Foo(),给window.getName赋值(alert 1),返回this（window）,取window.getName()方法
// getName(); // 1 上条已经修改了window.getName
// new Foo.getName(); // 2 使用了new,返回的是创建的对象
// (new Foo).getName(); // 3 函数内找不到，去原型找
// new Foo().getName(); // 3 上同
// new new Foo().getName(); // 3 第一个new其实无实际意义

// function Person() {

// }
// var p =  new Person;
// var p1 =  new Person();
// new Person.getName();//先getName再new
// new Perosn().getname();//先new再getName

