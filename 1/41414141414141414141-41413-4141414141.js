
    var oDiv=document.getElementById("div1");
    var jsonStr={
        "left":500,
        top:400,
        "width":"200",
        "height":"200",
        "opacity":"0.8"
    };
    oDiv.onclick = function(){
        if(!this.timer){
            starMove(this,jsonStr,1000,toGreen);
        }
    };
    function starMove(ele,jsonStr,duration,fnCallback){
        var oBegin={};//不同方向的起始值；
        var oChange={};//不同方向的运动距离；
        var booleanNum=0;
        for(var attr in jsonStr){
            var begin=setCss(ele,attr);
            var target=jsonStr[attr];
            var change=target-begin;
            if(change){
                oBegin[attr]=begin;
                oChange[attr]=change;
                booleanNum++;
            }
        }
        if(booleanNum===0){
            if(typeof fnCallback=="function"){
                fnCallback.call(ele);
            }
            return;
        }else{
            var interval=13;
            var times=0;
            clearInterval(ele.timer);
            ele.timer=window.setInterval(move,interval);
            function move(){
                times+=interval;
                if(times>=duration){
                    clearInterval(ele.timer);
                    ele.timer=null;
                    for(var attr in jsonStr){
                        setCss(ele,attr,jsonStr[attr]);
                    }
                    if(typeof fnCallback=="function"){
                        fnCallback.call(ele);
                    }
                }else{
                    for(var attr in oChange){
                        var targetNumber=oBegin[attr]+oChange[attr]*(times/duration);
                        setCss(ele,attr,targetNumber);
                    }
                }
            }
        }
    };

    //回调方法；
    function toGreen(){
        setCss(this,"backgroundColor","green");
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
                case "float":
                    curEle["style"].cssFloat = value;
                    curEle["style"].styleFloat = value;
                    break;
                case "backgroundColor":
                    curEle["style"][attr] = value;
                    break;
                case "zIndex":
                    curEle["style"][attr] = value;
                    break;
                default:
                    curEle["style"][attr] = !isNaN(value) ? value += "px" : value;
            }
        }
    };

