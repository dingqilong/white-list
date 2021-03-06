
    var oDiv=document.getElementById("div1");




    function bind1(ele,type,fn){
        if(ele.addEventListener){
            ele.addEventListener(type,fn);
        }else{
            //解决关键字，与call，apply有关
            //ele.attachEvent("on"+type,fn.call(ele));//这样不可以的，因为会直接执行；
            ele.attachEvent("on"+type,function(){fn.call(ele)});//改变fn的this关键字；
        }
    };
    function unbind1(ele,type,fn){
        if(ele.removeEventListener){
            ele.removeEventListener(type,fn,false);
        }else{
            ele.detachEvent("on"+type,fn)
        }
    }
    /*改1的，解决了this关键字问题，但是解绑的时候，解除不掉了*/
    /*改2*/
    function bind2(ele,type,fn){
        if(ele.addEventListener){
            ele.addEventListener(type,fn);
        }else{
            var fnTemp=function(){fn.call(ele)};//解决fn的this关键字
            var oBind=ele.myBind;
            if(!oBind){//避免多次创建,防止覆盖原来第一次创建的数组；
                oBind=[];
            }
            for (var i=0;i< oBind.length;i++){//防止重复绑定的；
                if(oBind[i].flag==fn){
                    return;
                }
            }
            oBind.push(fnTemp);
            fnTemp.flag=fn;//flag是识别符号；是为了解绑的时候，可以找到解绑目标；因为fn是函数，属于引用类型数据，不能和fn相等；fn!==fn;所以在上面加了一个flag；方面解绑来解除
            ele.attachEvent("on"+type,fnTemp);//改变fn的this关键字；
        }
    };
    function unbind2(ele,type,fn){
        if(ele.removeEventListener){
            ele.removeEventListener(type,fn,false);
        }else{
            var oBind=ele.myBind;
            if(oBind&& oBind.length){
                for(var i=0;i< oBind.length;i++){
                    if(oBind[i].flag===fn){//a[i]和fnTemp是一样的；a[i].flag相当于fnTemp.flag
                        ele.detachEvent("on"+type,oBind[i]);//a[i]就是化妆后的fn；
                        oBind.splice(i,1);//一个方法只能绑定一个一次，所以要删除绑定过的；
                        return;

                    }
                }
            }
        }
    };
    /*改2里面如果给oDiv的onclick绑定fn1，那么在oDiv的onmouseover就不能继续绑定fn1了，因为他们公用一个数组*/

    /*下面是成功的了,最终的*/
    /*****改3*/
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


    bind3(oDiv,"click",fn1);
    bind3(oDiv,"mouseover",fn1);
    var num=0;
    function fn1(){
        num++;
        this.innerHTML="改变this关键字"+num;
        if(num==5){
            console.log("解除绑定的函数");
            unbind3(oDiv,"click",fn1);
            unbind3(oDiv,"mouseover",fn1);
        }
    }

    function fn4(){
        num+=1;
        if(num==3){
            unbind(this,"click",fn1);//移除
        }
        console.log("4");
    };
