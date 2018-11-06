
var obj = {
    name : "sunshine",
    age : 20
}

//delete关键字可以用来删除对象的属性，还有未使用var声明的变量

//delete关键字有返回值 用来表示删除属性是否成功
var result = delete obj.name;
console.log(obj.name, result);//undefined true

num1 = 100;
result = delete num1;
console.log(window.num1, result);//undefined true

//不能删除使用var定义的变量
var num2 = 10;
var result = delete num2;
console.log(result);//false

//如果删除的是不存在的属性，返回值为true
var result = delete obj.gender;
console.log(result);//true

//如果删除的属性存在原型中，返回值为true，但是并未删除
console.log(obj.toString());//[object Object]
var result = delete obj.toString;
console.log(result);//true
console.log(obj.toString());//[object Object]

