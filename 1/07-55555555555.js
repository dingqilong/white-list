
//值类型赋值
var str = "sunshine1";
var str1 = str;
str = "sunshine2";
console.log(str1);//sunshine1

var num1 = 110;
var num2 = num1;
num1 = 119;
console.log(num2);//110

//引用类型赋值
//引用类型赋值将变量中存储的地址复制一份单独存储（存的是地址），但是两个变量共享同一个对象
var p1 = {
    name : "sunshine",
    age : 60
}
var p2 = p1;
p1.name = "csxiaoyao";
p1.age = 16;
console.log(p2.name, p2.age);//csxiaoyao 16

