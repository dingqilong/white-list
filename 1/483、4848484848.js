
    function fn(e){
        e=e||event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelable=true;
        }
        if(e.preventDefault){
            e.preventDefault();//标准浏览器阻止默认行为
        }else{
            e.returnValue=false;//IE阻止默认行为
        }
        console.log(this.nodeName);
    }
    eles=document.getElementsByTagName("*");
    for(var i=0;i<eles.length;i++){
        eles[i].addEventListener("click",fn,false);
    }

    //下面是动态创建的
    var p=document.createElement("p");
    document.body.appendChild(p);
    p.innerHTML="222312312312";
    /*动态创建的，不能有效果，可以用事件委托来实现*/
