
//this
//1.this只出现在函数中。
//2.谁调用函数，this就指的是谁。
//3.new People();   People中的this代指被创建的对象实例。

//var aaa = new Object();
//new
//1.开辟内存空间，存储新创建的对象（ new Object() ）
//2.把this设置为当前对象
//3.执行内部代码，设置对象属性和方法
//4.返回新创建的对象

var a = new Student();
console.log(a);//Student
a.say();//undefined
function Student(name){
    this.name = name;
    this.say = function () {
        console.log(this.name);
    }
}
var stu1 = new Student("csxiaoyao1");
var stu2 = new Student("csxiaoyao2");
console.log(stu1);//Student
stu1.say();//csxiaoyao1
console.log(stu2);//Student
stu2.say();//csxiaoyao2

