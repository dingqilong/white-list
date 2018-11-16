
    /*每一个单独行为，是依赖一个主体/上下文
    * 每一个主体是一个类的实例
    * 类是一种统筹管理的方式
    * */
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
    };
    Drag.prototype.move=function(e){
        this.ele.style.left=this.x+(e.pageX-this.mx)+'px';
        this.ele.style.top=this.y+(e.pageY-this.my)+'px';
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
    };

    var obj1=new Drag(div1);
    var obj1=new Drag(div2);
    var obj1=new Drag(div3);
