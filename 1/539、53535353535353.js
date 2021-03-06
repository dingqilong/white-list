
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
            console.log(this.speed);
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
        fly.call(this);

    };
    function fly(){
        //谁执行这个动画；this就是谁；
        this.speed*=0.93;
        this.style.left=this.offsetLeft+this.speed+"px";
        /*定时器的this是window；*/
        window.setTimeout(bindThis(this,arguments.callee),30)//arguments.callee就是函数本身的意思，也可以写fly；
    }

    function bindThis(obj,fn){
        //绑定this关键字
        return function(e){fn.call(obj,e)}
    }
