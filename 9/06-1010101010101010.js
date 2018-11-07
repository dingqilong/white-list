
//值类型：  string  number  boolean  undefined
var str = "sunshine";
var num = 19931128;
var flag = true;

var now = new Date();
console.log(typeof (new Array()));//object
console.log(typeof (function () {}));//function

//引用类型：object
var car = {
    brand : "Ferrari",
    type : 430
}
var obj = {
    name : "张学友",
    age : 18,
    car : car//car的地址
};

