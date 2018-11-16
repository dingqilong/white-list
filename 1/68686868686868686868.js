
    var oDiv=document.getElementById("div1");
    oDiv.onmouseover = function(){
        animate(this,"height",300,1000);
    };
    function animate(ele,attr,target,duration){
        var times=0;
        var begin=setCss(ele,attr);//起点
        var change=target-begin;//总的移动距离=目的地-其实的位置;
        var nInterval=13;//一步走多少；步长；
        function move(){
            times+=nInterval;
            if(times<duration){//时间到，就停止
                ele.style[attr]=begin+change*(times/duration)+"px";
            }else{
                ele.style[attr]=target+"px";
                clearInterval(timer);
            }
        }
        var timer=window.setInterval(move,nInterval);
    };
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
