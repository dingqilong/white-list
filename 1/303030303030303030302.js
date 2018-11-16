
    var oDiv=document.getElementById("div1");
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
        //上面是绑定事件的标配；
        //获取这个div的宽度和高度；并且让这个DIV显示在鼠标出现位置的正中间；
        newDiv.style.left =event.clientX-newDiv.offsetWidth/2+"px";
        newDiv.style.top =event.clientY-newDiv.offsetHeight/2+"px";
        //下面是判断边界，当鼠标移到左边界和右边界的判断；
        var l= event.clientX-newDiv.offsetWidth/2-oDiv.offsetLeft;
        var t= event.clientY-newDiv.offsetHeight/2-oDiv.offsetTop;
        if (l <= 0) {
            newDiv.style.left = oDiv.offsetLeft + "px";
        } else if (l > (oDiv.offsetWidth - newDiv.offsetWidth)) {
            newDiv.style.left = oDiv.offsetLeft + oDiv.offsetWidth-newDiv.offsetWidth + "px";
        }
        //当鼠标移到上边界和下边界的判断；
        if (t < 0) {
            newDiv.style.top = oDiv.offsetTop  + "px";
        } else if (t > (oDiv.offsetHeight - newDiv.offsetHeight)) {
            newDiv.style.top = oDiv.offsetTop + oDiv.offsetHeight-newDiv.offsetHeight + "px";
        }
    };












