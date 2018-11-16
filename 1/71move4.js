
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
        var start = setCss(oDiv,"left"),
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
    function setCss(curEle,attr,value) {//设置CSS属性值和获取CSS；如果三个参数就是设置，2个参数就是获取；att是attribute的缩写；
        if(typeof value==="undefined"){//如果有第三个参数，就是设置Css；如果没有就是获取Css；
            var reg = /^(?:margin|padding|border|float|position|display|background|backgroundColor)$/;
            var flag="getElementsByClassName" in document;
            var value = flag ? window.getComputedStyle(curEle, null)[attr] : curEle.currentStyle[attr];
            return !reg.test(attr) ? parseFloat(value) : value;
        } else{
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
