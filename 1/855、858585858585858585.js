
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



    /*下面是解决执行顺序的方案IE678*/

    var oDiv=document.getElementById("div1");
    var type="click";
    oDiv["aEvent"+type]=[];
    oDiv["aEvent"+type].push(fn1);
    oDiv["aEvent"+type].push(fn2);
    oDiv["aEvent"+type].push(fn3);
    oDiv["aEvent"+type].push(fn4);
    oDiv["aEvent"+type].push(fn5);
    oDiv["aEvent"+type].push(fn6);
    oDiv["aEvent"+type].push(fn7);
    oDiv["aEvent"+type].push(fn8);
    oDiv["aEvent"+type].push(fn9);
    oDiv["aEvent"+type].push(fn10);

    bind3(oDiv,type,run);
    /*绑定给run；然后由函数run统一来调*/
    function run(){
        console.log("执行run方法");
        var a=this["aEvent"+window.event.type];//因为做IE的，所以写window.event
        for(var i=0;i< a.length;i++){
            //a[i]();//这样是不行的虽然顺序解决了，但是IE的this还是不对了；
            a[i].call(this);//这样就可以了
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

















