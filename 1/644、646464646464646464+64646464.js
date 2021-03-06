
    var eles=document.getElementsByTagName("div");
    for(var i=0;i<eles.length;i++){
        on(eles[i],"mousedown",down);
        selfOn(eles[i],"selfDragStart",zIndexplus);
        selfOn(eles[i],"selfDragStart",clearEffect);
        selfOn(eles[i],"selfDragMove",getSpeed);
        selfOn(eles[i],"selfDragEnd",fly);
        selfOn(eles[i],"selfDragEnd",drop);
    }
    function selfOn(ele,type,fn){//绑定自定义事件；
        if(!ele[type]){
            ele[type]=[];
        }
        var ary=ele[type];
        for(var i=0;i< ary.length;i++){
            if(ary[i]==fn)return;
        }
        ary.push(fn);
    }
    function fire(type,e){//做接口，桥梁的作用；
        var ary=this[type];
        if(ary){
            for(i=0,len=ary.length;i<len;i++){
                ary[i].call(this,e);
            }
        }
    }

    function down(e){//把down发布为一个事件；让别人能够约定的标识符；
        //识别符："selfDragStart" ;
        this.x=this.offsetLeft;
        this.y=this.offsetTop;
        this.mouseX= e.pageX;
        this.mouseY= e.pageY;
        if(this.setCapture){
            this.setCapture();
            on(this,"mousemove",move);
            on(this,"mouseup",up);
        }else{
            this._move=bindThis(this,move);
            this._up=bindThis(this,up);
            on(document,"mousemove",this._move);
            on(document,"mouseup",this._up);
        }
        e.preventDefault();//阻止默认行为，解决盒子因为加了图片，站住鼠标的BUG；
        fire.call(this,"selfDragStart",e);//这个是接口；
    }
    function move(e){
        this.style.left=this.x+ (e.pageX-this.mouseX)+"px";
        this.style.top=this.y+ (e.pageY-this.mouseY)+"px";
        fire.call(this,"selfDragMove",e);//这个是接口；
    }
    function up(e){
        if(this.releaseCapture){
            this.releaseCapture();
            off(this,"mousemove",move);
            off(this,"mouseup",up);
        }else{
            off(document,"mousemove",this._move);
            off(document,"mouseup",this._up);
        }
        fire.call(this,"selfDragEnd",e);//这个是接口；
    }







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





    var zIndex=1;
    function zIndexplus(){
        this.style.zIndex=++zIndex;//解决图片覆盖的；
    }

    function clearEffect(){
        clearTimeout(this.flytimer);
        clearTimeout(this.droptimer);
    }

    function getSpeed(e){
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
    }

