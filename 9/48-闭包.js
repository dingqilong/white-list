
//1、闭包 是一个具有封闭的对外不公开的, 包裹结构, 或空间
//2、js中的闭包是函数
//3、闭包的原理是作用域访问原则，上级作用域无法直接访问下级作用域中的变量
//4、闭包内的数据不允许外界访问，要解决的问题就是间接访问该数据
//5、闭包基本模式
    //在外部函数（foo）内创建函数(inner)，在这个内部函数(inner)中，可以操作foo中的数据
    //将外部函数的返回值设置为内部函数
    //在外部调用外部函数（foo）,就可以接受到返回值(内部函数)
    //使用这个内部函数，就可以在外部对外部函数里的变量进行修改
//6、闭包的作用
    //最基本的作用：可以通过闭包返回的函数或者方法，来修改函数内部的数据
    //创建一个私有的空间，保护数据
    //外部想要访问数据，只能通过函数提供的方法
    //在提供的方法中，可以设置一些校验逻辑，让数据变得更加安全
function outer(){
    var data = "数据";
    return function(){
        return data;
    }
}
function outer(){
    var data1 = "数据1";
    var data2 = "数据2";
    return {
        getData1:function(){
            return data1;
        },
        getData2:function(){
            return data2;
        }
    }
}
function outer(){
    var data = "数据";
    return {
        getData:function(){
            return data;
        },
        setData:function(value){
            data = value;
            return data;
        }
    }
}
var obj = outer();
console.log(obj.getData());
console.log(obj.setData("sun"));

