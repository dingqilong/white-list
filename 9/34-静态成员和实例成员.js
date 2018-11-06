
//静态成员和实例成员的概念是从其他编程语言中引入的
//静态成员：指构造函数的属性和方法，把工具方法，作为静态成员
//实例成员：指实例的属性和方法，把和对象相关的方法，作为实例成员
function Person(){
    this.name = "sunshine";
    this.run = function () {
        console.log("run");
    }
}
// Person.prototype // 静态成员
console.log(Person.name);//Person 静态成员
var p = new Person();
console.log(p.name);//sunshine 实例成员

// 实例成员：通过实例对象访问
//__proto__
// $("#id").css();
// $("#id").text();

// 静态成员：通过构造函数访问
// $.trim();
// $.each();
// $.extend();

