
    var obj = {
        name: "sunshine",
        age:50
    };
    //对象的动态特性
    //在对象创建后为对象添加新的属性或方法
    
    // 1【点语法】
    obj.gender = "male";
    obj.sayHello = function () {
        console.log("add a function");
    }
    obj.sayHello();
    obj.name = "csxiaoyao";

    // 2 对象名[属性名]   注意:属性名是字符串
    console.log(obj["name"]);
    obj["name"] = "sun";
    console.log(obj["name"]);
    //如果使用的键不是字符串类型，会隐式转换成字符串类型
    obj[0] = {brand : "sunshine"};
    console.log(obj[0]["brand"]);//sunshine,0自动转换成“0”
    obj[{}] = {brand : "sunshine"};
    console.log(obj[{}].brand);//sunshine,{}自动转换成“{}”

