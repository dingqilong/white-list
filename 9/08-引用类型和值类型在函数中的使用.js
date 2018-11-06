

//实参：函数调用的时候，实际传入的参数
//形参：函数声明的时候，占位的变量名，没有具体的数值
//在函数调用时，会默认的将实参【赋值】给形参

//值类型做函数的参数
//形参和实参只是简单的赋值操作，两个数据独立存储于内存中
var num = 10;
function changeNumber( num ){
    num = 100;
    console.log(num);//100
}
changeNumber(num);
console.log(num);//10

//引用类型做函数的参数
//把实参存储的地址赋值给形参，在函数内部，形参同样也指向该对象
//注意：如果在函数内部重新创建对象，为该形参赋值，那么两个对象将不再有关系
var obj = {
    name : "sunshine1"
};

function fun(param){
    //param = obj
    param.name = "sunshine2";
    //重新创建一个对象修改param的指向，但obj还指向原来的对象
    param = {
        name:"sunshine3"
    };
    //修改的是新创建的对象，非obj
    param.name = "sunshine1";
}
fun(obj);
console.log(obj.name); //sunshine2

