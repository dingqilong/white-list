
// 【传统构造函数存在的问题】
// 每次创建对象，都会重新创建该函数，但函数内部代码完全相同，造成了资源浪费
// 解决：共用方法，在构造函数外部定义好函数，将该函数赋值给构造函数内的方法，
//       this指向的就是调用该方法的对象
// 【使用这种方式存在的问题】
// 1.全局变量增多，造成污染
// 2.代码结构混乱，不易维护

function Person(name, status) {
    this.name = name;
    this.status = status;
    this.act = function () {
        console.log("act");
    };
    // this.exercise = function () {
    //     console.log("exercise");
    // }
}
var p = new Person("csxiaoyao","single");
// p.exercise();//exercise

// 【原型】
// 在构造函数创建的时候，系统会默认为构造函数创建并关联一个对象，这个对象就是原型
// 原型默认是一个空的对象

// 【原型的作用】
// 原型中的属性和方法 可以被使用该构造函数创建出来的对象使用

// 【访问构造函数的原型】
// 构造函数.prototype
console.log(Person.prototype);//Object {}
console.log(p.prototype); //undefined  注意 prototype是构造函数的属性，跟对象没有关系

// 【给原型对象添加属性和方法】使用对象的动态特性
Person.prototype.exercise = function () {
    console.log("prototype exercise");
}
p.exercise();//prototype exercise

//当使用对象访问属性和方法时，会首先在对象自己内部查找，如果找到，直接使用
//如果没找到，就原型中查找，找到之后，使用
//如果原型中没有，如果是属性，Undefined
//如果是方法，报错
// p.sing();  //本身和原型中都没有 报错

//【使用原型解决构造函数存在的问题】
//原理：构造函数的原型对象中的成员，可以被该构造函数创建出来的所有对象访问，且所有的对象共享该对象
//可以将构造函数中需要创建的函数，放到原型对象中存储，解决全局变量污染的问题及代码结构混乱的问题
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    // this.sayHello = function () {
    //     console.log("name:" + this.name);
    // }
}
var p1 =new Person("csxiaoyao1",18,"male");
var p2 = new Person("csxiaoyao2",19,"male");
Person.prototype.sayHello = function () {
    console.log("name:" + this.name);
}
Person.prototype["sing"] = function () {
    console.log(this.name + " sing");
}
console.log(p1.name);//csxiaoyao1
console.log(p1.age);//18
console.log(p1.gender);//male
p1.sayHello();//name:csxiaoyao1
p2.sayHello();//name:csxiaoyao2
p1.sing();//csxiaoyao1 sing
p2.sing();//csxiaoyao2 sing

// 【case】
function Student(age){
    this.age=age;
}
Student.prototype.name="csxiaoyao";
var stu = new Student(18);
for(var k in stu){
    console.log(k,stu[k]);
}

