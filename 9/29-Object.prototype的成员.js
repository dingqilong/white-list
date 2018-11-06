
// constructor ：指向和该原型相关的构造函数
// hasOwnProperty 方法 ：判断对象本身是否拥有某个属性
// properIsEnumerable 方法 ：1.判断属性是否属于对象本身，2.判断属性是否可以被遍历
// toString toLocaleString ：将对象转换成字符串 toLocalString转换成字符串的时候应用的本地的设置格式
// valueOf 方法 ：在对象参与运算的时候，首先调用valueOf方法获取对象的值，如果该值无法参与运算，将会调用toString方法
// proto 属性 ：指向当前对象的原型对象


//1.constructor
//原型对象内的一个属性，指向该原型对象相关联的 构造函数

//2.hasOwnProperty
//用来判断对象本身（不包含原型）是否拥有某个属性
function Person1(){
   this.name = "sunshine";
}
Person1.prototype.name = "csxiaoyao";
var p = new Person1();
console.log(p.name);//sunshine
console.log(p.hasOwnProperty("name"));//true
console.log(p.hasOwnProperty("__proto__"));//false  hasOwnProperty不包含原型
console.log(p.hasOwnProperty("toString"));//false  toString在原型链上
// 想要查看对象(包括原型链)是否具备指定的属性，可以使用in操作符
console.log("toString" in p);// true

//3.propertyIsEnumerable  如toString不可被枚举
    // 1. 判断属性是否属于对象本身
    // 2. 判断属性是否可以被遍历
console.log(p.propertyIsEnumerable("name"));//true
// 使用 Object.defineProperty(); 方法添加属性可以附加一些信息，如这个属性是否可写、可读、可遍历

//4. toString 和 toLocaleString
var o = {};
console.log(o.toString());//[object Object]
console.log(o.toLocaleString());//[object Object]
var now = new Date();
console.log(now.toString());//Tue Feb 28 2017 17:45:35 GMT+0800 (中国标准时间)
console.log(now.toLocaleString());//2017/2/28 下午5:45:35

//5.valueOf
//获取当前对象的值
function Person2(){

}
var p2 = new Person2();
console.log(p2.valueOf());
//在对象参与运算的时候
    //1.默认的会先去调用对象的valueOf方法，
    //2.如果valueOf获取到的值，无法进行运算 ，就去去调用p的toString方法  最终做的就是字符串拼接的工作

//6. __proto__
//原型对象对象中的属性
//可以使用 对象.__proto__ 去访问原型对象

