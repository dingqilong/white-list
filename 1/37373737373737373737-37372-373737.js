
    var oDiv=document.getElementById("div1");
    oDiv.onclick = function(){
        if(!this.timer){
            animate(this,"left",500,1000,toGreen);
        }
    };

    function animate(ele,attr,target,duration,fnCallback){
        var times=0;
        var begin=setCss(ele,attr);//起点
        var change=target-begin;//总的移动距离=目的地-其实的位置;
        var nInterval=13;//一步走多少；步长；
        if(change===0){//解决无效运动，changge=begin;
            if(typeof fnCallback=="function"){
                fnCallback.call(ele);
                return;
            }
        };

        clearInterval(ele.timer);
        ele.timer=window.setInterval(move,nInterval);
        function move(){
            times+=nInterval;
            if(times>=duration){
                setCss(ele,attr,target);
                clearInterval(ele.timer);
                ele.timer=null;//动画停止的时候，变为null；这样就成为elel这个元素是否在运动的判断依据了；
                /*动画行为结束*/
                if(typeof fnCallback=="function"){
                    fnCallback.call(ele);
                }
            }else{
                var targetNumber=begin+change*(times/duration);
                setCss(ele,attr,targetNumber);
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

    //回调方法；
    function toGreen(){
        this.style.backgroundColor="green"
    };
    function fnRight(){
        animate(this,"left",600,1000,fnDown);
    }
    function fnDown(){
        animate(this,"top",600,1000,fnLeft);
    }
    function fnLeft(){
        animate(this,"left",0,1000,fnUp);
    }
    function fnUp(){
        animate(this,"top",0,1000,fnRight);
    }
