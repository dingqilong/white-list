
    console.dir(console);//查看console的api
    console.dir(console.memory);

    //assert    断言
    var isDebugOne=true,
        isDebugTwo=false;
    console.assert(isDebugOne,"isDebugOne为true时输出这段话");
    console.assert(isDebugTwo,"isDebugTwo为false时输出这段话");

    //clear     清除控制台
    console.clear("clear logs");//清除上面输出的日志

    //count     计数
    function test(){
        //bala bala
        console.count("test被执行的时输出，记录当前第几次执行")
    }
    test();
    test();
    test();
    test();
    function countFn(data){
        console.count("目标被执行的次数"+data)
    }
    var users=["zhu1","zhu2","zhu3"];
    users.forEach(function (ele, index, ary) {
        countFn(ele);
    });
    countFn(users[0]);
    /*
    * 目标被执行的次数zhu1: 1
      目标被执行的次数zhu2: 1
      目标被执行的次数zhu3: 1
      目标被执行的次数zhu1: 2
    *
    * */

    //dir      详细信息
    console.log(test);
    console.dir(test);
    console.info(test);
    console.error(test);
    console.warn(test);
    //printf风格的占位符
    console.log("%s是一个字符串",'2018');//2018是一个字符串
    console.log("%d年%d月%d日",2017,01,07);//2017年1月7日
    console.log("%f是JS中的浮点数，计算时候容易出错，需要转换成整数再运算",1.22);//1.22是JS中的浮点数，计算时候容易出错，需要转换成整数再运算
    console.log("第一个参数%s，第二个参数%d,第三个参数%f,第四个参数%o",2017,2018,2019,2020);//这里都是数字类的

    //dirxml
    var mytable = document.getElementById('mytable');
    console.dirxml(mytable);

    //group
    function name(obj) {
        console.group('groupName');
        console.log('first: ', obj.first);
        console.log('middle: ', obj.middle);
        console.log('last: ', obj.last);
        console.groupEnd();
    }

    name({"first":"Wile","middle":"E","last":"Coyote"});

    function doStuff() {
        //还可以分组里面套分组
        console.group('doStuff()');
        name({"first":"Wile2","middle":"E2","last":"coyote2"});
        console.groupEnd();
    }

    doStuff();

    //console.time 和 console.timeEnd
    console.time("timer");
    for(var i=0;i<10000;i++){

    }
    console.timeEnd("timer");//timer: 0.270ms




    //console信息在一行显示
    for (let i=0;i<5;i++){
        console.log("1");
    }
























