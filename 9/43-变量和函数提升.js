

//js代码的执行分为两个步骤
//1.预解析
    //提升（hoisting）
    //JavaScript代码在预解析阶段，会对以var声明的变量名，和function开头的语句块，进行提升操作

//2.执行
//【函数的提升】
func();
function func(){
    console.log("Funciton has been called");
}
//【变量的提升】
console.log(a);
var a = 1;// 【undefined】 var后面的赋值不提升
//提升之后的代码模拟
// var a;
// console.log(a);
// a = 1;

//【同名函数的提升】
//预处理时将两个函数全部提升，但后面的函数会覆盖掉前面函数
func1();  //last
function func1(){
   console.log('This is first func1');
}
func1();  //last
function func1(){
   console.log('This is last func1');
}
//预解析提升后的代码
// function func1(){
//    console.log('This is first func1');
// }

// function func1(){
//    console.log('This is last func1');
// }
// func1();  //last
// func1();  //last

//【变量和函数同名】
//提升时忽略变量，只提升函数
console.log(foo); //undefined  函数体
function foo(){}
var foo = 2;
console.log(foo); //2
//预解析 提升后的代码
// function foo(){};
// console.log(foo);
// foo = 2;
// console.log(foo);


