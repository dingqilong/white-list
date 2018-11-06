
//作用域
//变量起作用的范围就是变量的作用域
//并不是在函数内部写了变量，这个变量就属于这个函数的作用域，
// 而是必须使用var来声明变量，这个变量才会属于这个作用域
function test(){
    // console.log(num);//num is not defined
    num = 456;
    num =function () {
    }
}
test();


//1.JavaScript中没有块级作用域
//如果有块级作用域下面的代码的显示结果为 undefined undefined
for(var i=0; i<10;i++){
    var num = i;
}
console.log(i);//10
console.log(num);//9

//2.词法作用域不是动态作用域
//在代码写好的那一刻，变量的作用域就已经确定了，这种作用域，就是所谓的词法作用域
//和词法作用域相对的叫动态作用域，js中是词法作用域不是动态作用域
function f2(){
    var a = 123;
    function f1(){
        console.log(a);
    }
}
f2();

//3.在JavaScript中唯一能产生作用域的是函数
var a = 1;
function test(){
    var b = 10;
}

//4.词法作用域的规则
//函数允许访问函数外的数据.
//整个代码结构中只有函数可以限定作用域.
//作用域规则首先使用提升规则分析
//如果当前作用域中有了该变量, 就不考虑外面的同名变量

