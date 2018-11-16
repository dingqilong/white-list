
    var oDiv=document.getElementById("div1");
    var oLeft=document.getElementById("left");
    var oRight=document.getElementById("right");
    var timer=null;//全局变量；
    oLeft.onclick=function(){move(oDiv,0)};
    //点完left后，move运行，还要开启一个定时器；等30ms；timer=function(){move(ele,target)},在等待时候，15ms点了一下右，move方法再去执行；会清除timer；
    oRight.onclick=function(){move(oDiv,800)};
    function move(ele,target){
        clearTimeout(timer);
        var cur=getCss(ele,"left");
        if(cur<target){//当前位置小于目标值；
            if(cur+11>=target){//临界值的判断；
                ele.style.left=target+"px";
            }else{
                ele.style.left=getCss(ele,"left")+11+"px";
            }
            timer=window.setTimeout(function(){move(ele,target)},30)
        }else if(cur>target){//当前位置大于目标值
            if(cur-11<=target){
                ele.style.left=target+"px";
            }else{
                ele.style.left=getCss(ele,"left")-11+"px";
            }
            timer=window.setTimeout(function(){move(ele,target)},30)
        }
    };
    function getCss(ele,attr){
        //变量未定义不能直接用，如果相判断一个变量是否存在可以typeof；
        //属性未定义可以直接使用；
        if(typeof getComputedStyle){
            return parseFloat(getComputedStyle(ele,null)[attr]);
        }else{
            return parseFloat(attr.currentStyle[attr]);
        }
    };

