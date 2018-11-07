
    var a = "我是一个字符串";
    console.log(typeof (typeof a));
    var b = 12;
    console.log(typeof b);
    var c = true;
    console.log(typeof c);

    var obj = null;
    console.log(typeof obj);//object
    //变量不可能为null值，除非手动设置
    //要解除对象的占用（引用）的时候，给对象赋值为null
    var obj1;
    console.log(obj1); //undefined
    var person={/*...*/};
    person = null;


