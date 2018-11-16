
    /*每一个单独行为，是依赖一个主体/上下文
    * 每一个主体是一个类的实例
    * 类是一种统筹管理的方式
    * */
    function EventEimter(){}
    EventEimter.prototype.on=function(type,fn){
        if(!this[type]){
            this[type]=[];
        }
        for(var i=0;i<this[type].length;i++){
            if(this[type][i]==fn)return;
        }
        this[type].push(fn)
    };
    EventEimter.prototype.fire=function(type,obj,e){
        var ary=this[type];
        if(ary){
            for(var i=0;i<ary.length;){
                if(typeof ary[i]=="function"){
                    ary[i].call(obj,e);
                    i++;
                }else{
                    ary.splice(i,1);
                }
            }
        }
    };
    EventEimter.prototype.off=function(type,fn){
        var ary=this[type];
        if(ary){
            for(var i=0;i<ary.length;i++){
                if(ary[i]==fn){
                    ary[i]=null;
                    return;
                }
            }
        }
    };

     function Drag(ele){
        //初始化的，构造函数；
        this.x=null;
        this.y=null;
        this.mx=null;
        this.my=null;
        this.ele=ele;
        /*下面是强制指向当前的实例*/
        this._down=bindThis(this,this.down);
        this._move=bindThis(this,this.move);
        this._up=bindThis(this,this.up);
        on(this.ele,"mousedown",this._down)
    }
    Drag.prototype=new EventEimter();
    Drag.prototype.down=function(e){
        /*下面的this是Drag的实例*/
        this.x=this.ele.offsetLeft;
        this.y=this.ele.offsetTop;
        this.mx= e.pageX;
        this.my= e.pageY;
        if(this.ele.setCapture){
            this.ele.setCapture();
            on(this.ele,"mousemove",this._move);
            on(this.ele,"mouseup",this._up);
        }else{
            on(document,"mousemove",this._move);
            on(document,"mouseup",this._up);
        }
        this.fire("dragStar",this.ele,e)
    };
    Drag.prototype.move=function(e){
        this.ele.style.left=this.x+(e.pageX-this.mx)+'px';
        this.ele.style.top=this.y+(e.pageY-this.my)+'px';
        this.fire("dragMove",this.ele,e)

    };
    Drag.prototype.up=function(e){
        if(this.ele.releaseCapture){
            this.ele.releaseCapture();
            off(this.ele,"mousemove",this._move);
            off(this.ele,"mouseup",this._up);
        }else{
            off(document,"mousemove",this._move);
            off(document,"mouseup",this._up);
        }
        this.fire("dragEnd",this.ele,e)
    };

    var obj1=new Drag(div1);
    obj1.on("dragStar",zIndexplus);
    obj1.on("dragStar",clearEffect);
    obj1.on("dragMove",getSpeed);
    obj1.on("dragEnd",drop);
    obj1.on("dragEnd",fly);
    var obj2=new Drag(div2);
    var obj3=new Drag(div3);



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

