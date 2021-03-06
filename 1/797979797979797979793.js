
    var oDiv=document.getElementById("div1");
    var oDivL=oDiv.offsetLeft;
    var oDivT=oDiv.offsetTop;
    var oDivH=oDiv.offsetHeight;
    var oDivW=oDiv.offsetWidth;
    oDiv.onmouseenter=function(event) {
        var newDiv=document.createElement("div");
        newDiv.id="newDiv";
        this.appendChild(newDiv);//this添加，而不是document.body；
        setMark(newDiv,event);
    };
    oDiv.onmousemove=function(event) {
        var newDiv=document.getElementById("newDiv");
        if(newDiv){
            setMark(newDiv,event);
        }
    };
    oDiv.onmouseleave= function () {
        var newDiv=document.getElementById("newDiv");
            newDiv.parentNode.removeChild(newDiv);
    };

    function setMark(newDiv, event) {
        event = event || window.event;
        var newW=newDiv.offsetWidth;
        var newH=newDiv.offsetHeight;
        newDiv.style.left =event.clientX-newW/2+"px";
        newDiv.style.top =event.clientY-newH/2+"px";
        //下面是判断边界，当鼠标移到左边界和右边界的判断；
        var l= event.clientX-newW/2-oDivL;
        var t= event.clientY-newH/2-oDivT;
        if (l <= 0) {
            newDiv.style.left = oDivL + "px";
        } else if (l > (oDivW - newW)) {
            newDiv.style.left = oDivL + oDivW -newW + "px";
        }
        //当鼠标移到上边界和下边界的判断；
        if (t < 0) {
            newDiv.style.top = oDivT  + "px";
        } else if (t > (oDivH - newH)) {
            newDiv.style.top = oDivT + oDivH-newH + "px";
        }
    };




