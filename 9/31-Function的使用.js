

function Person(name, age){
    this.name = name;
    this.age = age;
}
var p = new Person("sunshine",25);

//【Function构造函数】可以用来新建函数对象
//Function接收的所有参数都是字符串类型的
//0.一个参数都不传,创建的是一个空的函数
//  var 函数名 = new Function()

//1.只传一个参数的情况 这个参数就是函数体
//  var 函数名 = new Function("函数体")
var func = new Function("console.log('动态创建函数');console.log(p.name);");
func();// 动态创建函数  sunshine

//2.传多个参数的情况，最后一个参数为函数体，前面的参数都是该函数的形参名
//利用 Function 创建一个求三个数中最大数的函数
var max = new Function("a", "b", "c", "return (a > b ? a : b)> c ? (a > b? a : b):c;");
console.log(max(34, 45, 11));//45
//解决使用Funciton创建函数时代码过长的问题
    //1.可以使用字符串拼接让代码换行
    //2.使用模板的方式，将代码写在模板标签内，获取该标签的内容
    //3.使用反引号（`） 引住字符串，就可以换行了
//【1】字符串拼接
//利用 Function 创建一个求数组中最大数的函数
var max = new Function("arr",
    "var maxNum = arr[0];" +
    "for(var i = 1;i<arr.length;i++){" +
        "if(maxNum < arr[i]){" +
            "maxNum = arr[i];" +
        "}" +
    "}" +
    "return maxNum;"
)
console.log(max([1, 2, 3, 44, 5, 6]));//44
//【2】模板
window.onload =function () {
    var script = document.getElementById("funcContent");
    var str = script.innerHTML;
    var max = new Function("arr", str);
    console.log(max([1, 2, 3, 44, 5, 6]));//44 最后执行
}
//【3】反引号
var max = new Function("a", "b", "c", `return (a > b ? a : b)> c ?
                                                 (a > b? a : b):c;`);
console.log(max(34, 45, 11));//45

