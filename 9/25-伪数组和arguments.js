

fn(1,2);
fn(1,2,3,4,5);
function fn(a,b){
    //只在函数中使用，实参的数组
    arguments[0] = 0;
    console.log(arguments);//[0, 2] [0, 2, 3, 4, 5]
    // 伪数组：不能修改长短的数组(可以修改元素，但是不能变长变短)
    // arguments.push(1);//报错
    console.log(arguments instanceof Array);//false false
    //形参个数
    console.log(fn.length);//2 2
    //实参个数
    console.log(arguments.length);//2 5
    // arguments.callee 整个函数，函数名
    console.log(arguments.callee);//function fn(a,b){…}
    // arguments.callee(2,3,4);
}

