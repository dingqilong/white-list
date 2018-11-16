
    var oDiv=document.getElementById("div1"),
            oLeft=document.getElementById("left"),
            oRight=document.getElementById("right");
    /*确定左右的终点*/
    var cW = document.documentElement.clientWidth || document.body.clientWidth;
    var tarR = cW - oDiv.offsetWidth,
            tarL = 0;

    oLeft.onclick=function(){
        move(oDiv,tarL);
    };
    oRight.onclick=function(){
        move(oDiv,tarR);
    };

    var timer=null;//全局变量；
    function move(oDiv,target) {
        var start = getCss(oDiv,"left"),
                count = start;
        _move();
        function _move() {
            clearTimeout(oDiv.timer);
            if (start < target) {//右
                if (count + 10 >= target) {
                    setCss(oDiv, "left", target);
                    return;
                }
                count += 10;
                setCss(oDiv, "left", count);
            } else if (start > target) {//左
                if (count - 10 <= target) {
                    setCss(oDiv, "left", target);
                    return;
                }
                count -= 10;
                setCss(oDiv, "left", count);
            } else {
                return;
            }
            oDiv.timer = setTimeout(_move, 10);
        }
    }
    function getCss(curEle,attr) {
        var reg = /^(?:margin|padding|border|float|position|display|background|backgroundColor)$/;
        var flag="getElementsByClassName" in document;
        var value = flag ? window.getComputedStyle(curEle, null)[attr] : curEle.currentStyle[attr];
        return !reg.test(attr) ? parseFloat(value) : value;
    }
    function setCss(curEle,attr,value) {
        if(typeof value!=="undefined"){
            switch (attr) {
                case "opacity":
                    curEle["style"][attr] = value;
                    curEle["style"]["filter"] = "alpha(opacity=" + (value * 100) + ")";
                    break;
                case "zIndex":
                    curEle["style"][attr] = value;
                    break;
                default:
                    curEle["style"][attr] = !isNaN(value) ? value += "px" : value;
            }
        }
    };
