
/*
    month: 用英文表示月份名称，从January到December
    mth:   用整数表示月份，0~11
    dd:    表示一个月中的第几天，从1到31
    yyyy:  四位数表示的年份
    hh:    小时数，从0（午夜）到23（晚11点）
    mm:    分钟数，从0到59的整数
    ss:    秒数，从0到59的整数
    ms:    毫秒数，为大于等于0的整数

    new Date("month dd,yyyy hh:mm:ss");
    new Date("month dd,yyyy");
    new Date(yyyy,mth,dd,hh,mm,ss);
    new Date(yyyy,mth,dd);
    new Date(ms);


    月份前导0
    var m = ('0' + (month + 1)).slice(-2);
*/
    
    //第一种，当前时间
    var date1 = new Date();
    console.log(date1);
    //第二种，指定时间
    var date2 = new Date("1993/11/28 00:00:00");
    console.log(date2);
    //第三种，兼容性不好，不推荐使用
    var date3 = new Date('Sun Nov 28 1993 00:00:00 GMT+0800 (中国标准时间)');
    console.log(date3);
    //第四种，兼容性不好，不推荐使用
    var date4 = new Date(1993,10,28);
    console.log(date4);

    console.log(date1.getDate()          )       //获取日 1-31
    console.log(date1.getDay ()          )       //获取星期 0-6（0代表周日）
    console.log(date1.getMonth ()        )       //获取月 0-11（1月从0开始）
    console.log(date1.getFullYear ()     )       //获取完整年份（浏览器都支持）
    console.log(date1.getHours ()        )       //获取小时 0-23
    console.log(date1.getMinutes ()      )       //获取分钟 0-59
    console.log(date1.getSeconds ()      )       //获取秒  0-59
    console.log(date1.getMilliseconds () )       //获取毫秒 （1s = 1000ms）
    console.log(date1.getTime ()         )       //返回累计毫秒数(从1970/1/1午夜)

    //获取当前时间距离1970/01/01的毫秒值
    var date11 = Date.now();
    var date22 = +new Date();
    var date33 = new Date().getTime();
    var date44 = new Date().valueOf();
    console.log(date11);
    console.log(date22);
    console.log(date33);
    console.log(date44);

    //日历
    var spanObj = document.getElementById("time");
    window.setInterval("getCurrentTime()",1000);
    function getCurrentTime(){
        var date = new Date();
        var timeInfo =  date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日 "+
    date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        spanObj.innerHTML = timeInfo;
    }
    
    //倒计时
    var div=document.getElementsByTagName("div")[0];
    var timer = setInterval(fn,1);
    function fn(){
        var nowtime = new Date();
        var future = new Date("2020/12/12 12:12:12");
        var timeSum = future.getTime() - nowtime.getTime();
        var day = parseInt(timeSum/1000/60/60/24);
        var hour = parseInt(timeSum/1000/60/60%24);
        var minu = parseInt(timeSum/1000/60%60);
        var sec = parseInt(timeSum/1000%60);
        var millsec = parseInt(timeSum%1000);
        day=day<10?"0"+day:day;
        hour=hour<10?"0"+hour:hour;
        minu=minu<10?"0"+minu:minu;
        sec=sec<10?"0"+sec:sec;
        if(millsec<10){
            millsec="00"+millsec;
        }else if(millsec<100){
            millsec="0"+millsec;
        }
        console.log(day);
        console.log(parseInt(timeSum/1000/60/60/24));
        if(timeSum<0){
            div.innerHTML="距离 2020/12/12 12:12:12 还有00天00小时00分00秒000毫秒";
            clearInterval(timer);
            return;
        }
        div.innerHTML="距离 2020/12/12 12:12:12 还有"+day+"天"+hour+"小时"+minu+"分"+sec+"秒"+millsec+"毫秒";
    }
