
    var oDiv=document.getElementById("div1");
    oDiv.onclick = function(){
        animate(this,"opacity",0.2,1000);
    };
    function animate(ele,attr,target,duration){
        var times=0;
        var begin=setCss(ele,attr);//起点
        var change=target-begin;//总的移动距离=目的地-其实的位置;
        var nInterval=13;//一步走多少；步长；
        console.log("开始："+begin);
        console.log("重点："+target);
        var timer=window.setInterval(move,nInterval);
        function move(){
            times+=nInterval;
            if(times>=duration){
                if(attr==="opacity"){/*如果是opacity，需要用到小数*/
                    ele.style[attr]=target;
                    ele.style["filter"] = "alpha(opacity=" + target*100 + ")";
                    clearInterval(timer);
                }else{
                    ele.style[attr]=target+"px";
                    clearInterval(timer);
                }

            }else{
                if(attr==="opacity"){
                    ele.style[attr]=begin+change*(times/duration);
                    ele.style["filter"] = "alpha(opacity=" + (begin+change*(times/duration))*100 + ")";
                }else{
                    ele.style[attr]=begin+change*(times/duration)+"px";
                }
            }
        }
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
