
    var calendar=document.getElementById("calendar"),
            oUl=document.createElement("ul"),
            currentDate=new Date,//当前的日.不让它变；
            activeDate=new Date;//活动的日期,这个是不断变的；
    activeDate.setDate(1);//活动显示日期的日设置为1号；
    var diff=1-activeDate.getDay();//获取1号前面还有几个LI用来漏出上一个月的日期；；
    activeDate.setDate(diff);//算出日历的起始日期；确定后再循环出后面的日期就可以了；算出这个月要往前退几步；
    for(var i=0;i<42;i++){
        var oLi=document.createElement("li"),
                date=activeDate.getDate();
        oLi.innerHTML=date;//表示当前的这个LI是几号；
        activeDate.setDate(date+1);//让日期对象往后走一天；然后再下一次循环的时候，赋值给oLi.innerHTML
        oUl.appendChild(oLi);
    }
    calendar.appendChild(oUl);

















