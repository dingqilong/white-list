
    var oDiv=document.getElementById("div1");
    var oA=oDiv.getElementsByTagName("a")[0];

    //on(oA,"click",fnTest);//只能监测A的
    on(document.documentElement,"click",fnTest);//可以检测DIV,BODY,HTML；


    function fnTest(e){
        /*不需要写window.event了，因为在run里已经解决了*/
        console.log(this);
        console.log(e.target.nodeName);
        e.preventDefault();//阻止默认行为；
        e.stopPropagation();//不会传播
    }

        /*下面是解决好this关键字的了,最终的*/
    function bind3(ele,type,fn){
        if(ele.addEventListener){
            ele.addEventListener(type,fn);
        }else{
            var fnTemp=function(){fn.call(ele)};//解决fn的this关键字
            if(!ele["myBind"+type]){
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
//                    aryEvent.splice(i,1);//数组塌陷解决
                    a[i]=null;
                    return;
                }
            }
        }
    }


    /*事件兼容性问题，都在run上解决好*/
    function run(e){
        e=e||window.event;
        if(!e.target){
            e.target= e.srcElement;
            e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+ e.clientX;
            e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+ e.clientY;
            e.stopPropagation=function(){e.cancelBubble=true;}//阻止事件传播;
            e.preventDefault=function(){e.returnValue=false;}//阻止事件默认行为;
        }
        /*上面是IE不支持的*/

        var a=this["aEvent"+e.type];
        for(var i=0;i< a.length;){
            /*下面是防止数组塌陷的*/
            if(typeof a[i]=="function"){
                //a[i].call(this);//this指向当前被绑定元素；
                a[i].call(this,e);//this后面加e；就解决了e的兼容性问题；因为想this主体传了e；具体的函数就不需要再解决e的兼容了；
                i++;
            }else{
                /*如果是空的，删掉；不删也是可以的*/
                a.splice(i,1);
            }
        }
    }

