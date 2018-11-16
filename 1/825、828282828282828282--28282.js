
    /*下面是解决好this关键字的了,最终的*/
    function bind3(ele,type,fn){
        if(ele.addEventListener){
            ele.addEventListener(type,fn);
        }else{
            var fnTemp=function(){fn.call(ele)};//解决fn的this关键字
            /*下面是标示，是为了解绑做铺垫的；*/
            if(!ele["myBind"+type]){//避免多次创建,防止覆盖原来第一次创建的数组；
                ele["myBind"+type]=[];
            }
            var oBind=ele["myBind"+type];
            for (var i=0;i< oBind.length;i++){//防止重复绑定的；
                if(oBind[i].flag==fn){
                    return;
                }
            }
            oBind.push(fnTemp);
            fnTemp.flag=fn;
            ele.attachEvent("on"+type,fnTemp);
        }
    };
    function unbind3(ele,type,fn){
        if(ele.removeEventListener){
            ele.removeEventListener(type,fn);
            console.log("标准浏览器的"+type+"已经解绑!")
        }else{
            console.log("IE6/7/8的"+type+"已经解绑!")
            var oBind=ele["myBind"+type];
            if(oBind&& oBind.length){
                for(var i=0;i< oBind.length;i++){
                    /*下面是确定要解绑的fn；*/
                    if(oBind[i].flag===fn){
                        ele.detachEvent("on"+type,oBind[i]);
                        oBind.splice(i,1);
                        return;
                    }
                }
            }
        }
    };



    /*下面是解决一个元素同一类似事件的执行顺序*/

    var oDiv=document.getElementById("div1");
    function on(ele,type,fn){
        if(!ele["aEvent"+type]){
            ele["aEvent"+type]=[];
        }
        var aryEvent=ele["aEvent"+type];
        for(var i=0;i<aryEvent.length;i++){//防止同一个方法被同事件绑定；
            if(aryEvent[i]==fn)return;
        }
        aryEvent.push(fn);
        bind3(ele,type,run);//只会执行一次
    }

    function off(ele,type,fn){
        if(ele["aEvent"+type]){
            var aryEvent=ele["aEvent"+type];
            for(var i=0;i<aryEvent.length;i++){
                if(a[i]==fn){
                    aryEvent.splice(i,1);//会造成数组塌陷；
                    return;
                }
            }
        }
    }



    on(oDiv,"click",fn1);
    on(oDiv,"click",fn2);
    on(oDiv,"click",fn3);
    on(oDiv,"click",fn4);
    on(oDiv,"click",fn5);
    on(oDiv,"click",fn6);
    on(oDiv,"click",fn7);
    on(oDiv,"click",fn8);
    on(oDiv,"click",fn9);
    on(oDiv,"click",fn10);


    function run(e){
        e=e||window.event;
        var a=this["aEvent"+e.type];
        for(var i=0;i< a.length;i++){
            a[i].call(this);
        }
    }



    function fn1(){console.log("执行函数fn1")}
    function fn2(){console.log("执行函数fn2")}
    function fn3(){console.log("执行函数fn3")}
    function fn4(){console.log("执行函数fn4")}
    function fn5(){console.log("执行函数fn5")}
    function fn6(){console.log("执行函数fn6")}
    function fn7(){console.log("执行函数fn7")}
    function fn8(){console.log("执行函数fn8")}
    function fn9(){console.log("执行函数fn9")}
    function fn10(){console.log("执行函数fn10")}

















