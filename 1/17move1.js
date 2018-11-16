
    var oDiv=document.getElementById("div1");
    oDiv.onclick=function(){
        move(this,600)
    };
    function move(ele,target){
        if(getCss(ele,"left")<target){
            ele.style.left=getCss(ele,"left")+5+"px";
            window.setTimeout(function(){move(ele,target)},30)
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

