
    document.documentElement.onclick=function(event){
        event=event||window.event;
        //事件源委托给documentElement
        target=event.target||event.srcElement;//事件源
        console.log(target.nodeName)
    };

    //下面是动态创建的
    var p=document.createElement("p");
    document.body.appendChild(p);
    p.innerHTML="222312312312";
    /*事件委托也可以实现动态绑定*/
    /*所有的事件，都可以用事件委托来实现；时间委托是一个高级技巧*/
