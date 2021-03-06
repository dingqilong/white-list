
    var oDiv=document.getElementById("div1");
    oDiv.onmousedown=down;

    /*第一步*/
    function down(e){
        e=e||window.event;
        this.x=this.offsetLeft;
        this.y=this.offsetTop;
        this.mouseX=e.clientX;
        this.mouseY=e.clientY;
        if(this.setCapture){
            //捕捉鼠标焦点的；IE的解决方法；
            this.setCapture();
            this.onmousemove=move;
            this.onmouseup=up;
        }else{
            var _move=bindThis(this,move);
            var _up=bindThis(this,up);
            document.onmousemove=_move;
            document.onmouseup=_up;
        }
        clearTimeout(this.flytimer);
        clearTimeout(this.droptimer);
    };
    /*第二步*/
    function move(e){
        this.style.top=this.y+(e.clientY-this.mouseY)+"px";
        this.style.left=this.x+(e.clientX-this.mouseX)+"px";
        /*加动画效果的代码*/
        if(!this.prevX){
            //记录第一次/上一次move事件触发的时候鼠标X轴位置;
            this.prevX= e.clientX;
        }else{
            this.speed= e.clientX-this.prevX;//速度=这次位置-上次位置；
            this.prevX= e.clientX;//改变this.prevX；记录本次的位置
            //两次move事件之间的事件间大体是一样的；
            // 速度=单位时间的距离;
        }
        /*动画代码结束*/
    };
    /*第三步*/
    function up(e){
        /*IE解决鼠标丢失焦点*/
        if(this.releaseCapture){
            this.releaseCapture();
            this.onmousemove=null;
            this.onmouseup=null;
        }else{
            document.onmousemove=null;
            document.onmouseup=null;
        }
//        fly.call(this);
//        drop.call(this);

    };

    /*左右反弹*/
    function fly(){
        clearTimeout(this.flytimer);
        var maxRight=(document.documentElement.clientWidth||document.body.clientWidth)-this.offsetWidth;
        this.speed*=0.93;
        if(this.offsetLeft+this.speed>=maxRight){
            this.style.left=maxRight+"px";
            this.speed*=-1;
        }else if(this.offsetLeft+this.speed<=0){
            this.style.left=0;
            this.speed*=-1;
        }else{
            this.style.left=this.offsetLeft+this.speed+"px";
        }
        if(Math.abs(this.speed)>=0.5){/*定时器停止的条件*/
            this.flytimer=window.setTimeout(bindThis(this,arguments.callee),30);
        }
    }

    /*自由落体*/
    var g=9.8;
    var flag=0;
    function drop(){
        clearTimeout(this.droptimer);
        var maxBottom=(document.documentElement.clientHeight||document.body.clientHeight)-this.offsetHeight;
        if(!this.dropSpeed){
            this.dropSpeed=g;
        }else{
            this.dropSpeed+=g;
        }
        /*下面是摩擦系数*/
        this.dropSpeed*=0.93;
        /*下面是边界判断*/
        if(this.offsetTop+this.dropSpeed>=maxBottom){
            this.style.top=maxBottom+"px";
            this.dropSpeed*=-1;
            flag++;
        }else{
            this.style.top=this.offsetTop+this.dropSpeed+"px";
            flag=0;
        }
        if(flag<2){
            this.droptimer=window.setTimeout(bindThis(this,arguments.callee),30);
        }
    }

    function bindThis(obj,fn){
        return function(e){fn.call(obj,e)}
    }
