
    //图片延迟加载：
    //1、静态资源图片的延迟加载(一般是网站上固定的大图，为了不影响第一次加载页面的速度，我们需要把这张大图延迟加载)
    //开始的时候，我们给当前大图所在的位置的div加一个默认的背景图(要求小，起到占位的作用)
    var oDiv = document.getElementById("div1");
    window.setTimeout(loadImg, 1000);
    function loadImg() {
        var oImg = new Image;
        oImg.src = "http://broszhu.com/works/imgLoad/img/5.jpg";
        oImg.alt = "";
        oImg.onload = function () {
            oDiv.appendChild(oImg);
            move(this);
        }
    }
    function move(ele) {
        var speed = 0;
        _move();
        function _move() {
            window.clearTimeout(ele.timer);
            speed += 0.02;
            setCss(ele, "opacity", speed);
            if (speed >= 1) {
                setCss(ele, "opacity", 1);
                return;
            }
            ele.timer = window.setTimeout(_move, 10);
        }
    };
    function setCss(curEle,attr,value) {//设置CSS属性值；
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
    //1、用setTimeout循环创建定时器产生的累加的问题：在每一次执行方法的时候，第一步首先把之前创建的定时器清除掉
    //2、在设置定时器的时候，如果一个匿名函数里面又包含了一个小的函数执行，然而小函数执行要用到匿名函数的上级作用域的东西，这样匿名函数作用域不销毁，性能不好
