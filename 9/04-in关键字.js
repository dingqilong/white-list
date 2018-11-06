
//in关键字 判断属性是否存在于对象中
//1. 最常用的是在for in 循环中 遍历对象的键
//2. 判断属性是否存在于对象中
//语法   属性名 in 对象
//对象的键为字符串类型
var obj = {
    name:"sunshine",
    age:18
};
for(var k in obj){
    console.log(typeof k);//string string
}
//注意:属性名称为字符串类型，需要用引号包起来
var propName = "name";
var isExsit = propName in obj;
console.log(isExsit);//true

//注意:操作数组的时候判断的是索引是否存在，而不是值
var arr = [4, 6, 3, 4];
console.log(0 in arr);//true
//隐式类型转换
console.log("0" in arr);//true
console.log(6 in arr);//false
//判断数组中是否存在指定的值
//1. for循环 如果找到了就输出
//2. indexOf 返回值为指定的数对应的索引，如果没有找到 返回-1
console.log(arr.indexOf(1));//-1

