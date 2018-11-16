
    var oTab = document.getElementById("tab");
    //获得oDiv本身的高和宽；获得oDiv距离浏览器左上角的位移；
    var tabT = oTab.offsetTop;
    var tabL = oTab.offsetLeft;
    var tabW = oTab.offsetWidth;
    var tabH = oTab.offsetHeight;
    //onmouseenter限制冒泡机制
    oTab.onmouseenter = function (e) {
        //创建大图容器
        var container = document.createElement("div");
        container.id = "container";
        this.appendChild(container);

        var bigImg=document.createElement("img");
        bigImg.src="img/peony.jpg";
        bigImg.id="bigImg";
        container.appendChild(bigImg);

        //当鼠标移近来的时候，动态创建一个DIV元素，id是mark
        var mark = document.createElement("div");
        mark.id = "mark";
        this.appendChild(mark);//像oTab里添加mark；

        //执行setMark
        setMark(mark, container, e);
    };

    oTab.onmousemove = function (e) {
        var mark = document.getElementById("mark");
        if (mark) {
            //先判断mark是否存在，如果存在，执行setMark
            setMark(mark, container, e);
        }
    };

    //onmouseleave也可以显示冒泡机制;
    oTab.onmouseleave = function () {
        var mark = document.getElementById("mark");
        if (mark) {
            //当离开的时候移除mark节点；
            this.removeChild(mark);
            this.removeChild(container);
        }
    };

    var jiance=document.getElementById("jiance");
    function setMark(mark,container,e) {
        e = e || window.event;
        //上面是绑定事件的标配；
        //获取mark这个div的宽度和高度；并且让mark这个DIV显示在鼠标出现位置的正中间；
        var markW = mark.offsetWidth;
        var markH = mark.offsetHeight;
        var l = e.clientX - tabL - (mark.offsetWidth / 2);
        var t = e.clientY - tabT - (mark.offsetHeight / 2);
        mark.style.left = l + "px";
        mark.style.top = t + "px";
        container.style.left=tabW+10+"px";
        container.style.top=0;
//        bigImg.style.left="-"+(l/tabW*bigImg.width)+"px";
//        bigImg.style.top="-"+(t/tabH*bigImg.height)+"px";
        //如果样式用上面的写，在IE678的时候有兼容性问题，应该改为下面的
        if(l<=0){
            bigImg.style.left=="0px";
        }else{
            bigImg.style.left="-"+l/tabW*bigImg.width+"px";
        }
        if(t<=0){
            bigImg.style.top=="0px";
        }else{
            bigImg.style.top="-"+(t/tabH*bigImg.height)+"px";
        }
        console.log("====t::"+parseInt(t));

        //下面是判断边界，当鼠标移到左边界和右边界的判断；
        if (l < 0) {
            mark.style.left = 0;
        } else if (l > (tabW - markW)) {
            mark.style.left = tabW - markW + "px";
            bigImg.style.left="-"+(tabW-markW)/tabW*bigImg.width+"px";
        }
        //当鼠标移到上边界和下边界的判断；
        if (t < 0) {
            mark.style.top = 0 + "px";
        } else if (t > (tabH - markH)) {
            mark.style.top = tabH - markH + "px";
            bigImg.style.top="-"+(tabH-markH)/tabH*bigImg.height+"px";
        }
    };
