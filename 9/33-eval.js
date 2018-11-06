
// eval函数可以将字符串转换成JavaScript代码并运行
var str = "var a = 10";
eval(str);
console.log(a);//10

//JSON格式的数据  JSON对象有兼容性问题
//使用eval来解析JSON格式字符串的时候，会将{}解析为代码块，而不是对象的字面量
//1.在JSON格式的字符串前面拼接上 "var o ="
//2.把JSON格式的字符串使用()括起来，就不会将{}解析为代码块，而是表达式
var jsonData = '({"name":"sunshine", "age":25})';
eval("var o = "+ jsonData);// var o = eval(jsonData);
console.log(o);

//动态运行js代码
var str = prompt("请输入内容");
eval(str);
//不推荐使用eval

