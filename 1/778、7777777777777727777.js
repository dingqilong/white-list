
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
            /*解决document.onmousemove的this关键字*/
            var _this=this;
            var _move=function(e){move.call(_this,e)};
            var _up=function(e){up.call(_this,e)};

            document.onmousemove=_move;
            document.onmouseup=_up;
        }
    };
    /*第二步*/
    function move(e){
        this.style.top=this.y+(e.clientY-this.mouseY)+"px";
        this.style.left=this.x+(e.clientX-this.mouseX)+"px";
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

    };

    function bindThis(obj,fn){
        return function(e){fn.call(obj,e)}
    }
