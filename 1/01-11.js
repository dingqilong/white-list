
// 内嵌式
alert("内嵌式");
prompt("请输入：");
confirm("确定吗？");
//输出语句
console.log("控制台输出");
console.error("错误");//了解
console.warn("警告");//了解

document.write("<h1>h1标签</h1>");//页面输出内容而且识别标签

function fn(a,b){
    return 111;
}

// 声明提升
//1
var a = 18;
f1();
function f1(){
   var b=9;
   console.log(a);//undefined
   console.log(b);//9
   var a = '123';
}
//2
f2();
console.log(cc);// 9
console.log(bb);// 9
console.log(aa);// 报错 is not defined
function f2(){
    var aa = bb = cc = 9;
    console.log(aa);// 9
    console.log(bb);// 9
    console.log(cc);// 9
}
