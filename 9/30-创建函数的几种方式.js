

//函数在声明的时候，里面的代码不会执行
//只有在调用的时候，代码才会执行
//声明函数时的函数名，其实也是一个变量名
//可以通过这个变量名来给其赋值

//1.直接声明函数
function funcName(/*参数列表*/){
    //函数体
}
//2.函数表达式
var funcName = function(){

};
//3.new Function
var func = new Function();
