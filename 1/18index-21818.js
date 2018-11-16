
    var oDivs=document.getElementsByTagName("div");
        var DRAG=(function() {
            /*下面的方法都是可以重用的；*/
            //*module model 模块模式 三种情况*/
            /*1、变量要保护，2、里面的一些函数或属性还要重复使用；3、变量共享（数据共享的）*/
            var x=null,y=null,mx=null,my=null,flag=0;
            function down(e){
                x=this.offsetLeft;
                y=this.offsetTop;
                mx= e.pageX;
                my= e.pageY;
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
                e.preventDefault();
                flag++;
                this.innerHTML="一共拖了"+flag+"次";
            }
            function move(e){
                this.style.left=x+(e.pageX-mx)+"px";
                this.style.top=y+(e.pageY-my)+"px";
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
            }
            return {down:down,move:move,up:up}

        })();

    for(var i= 0,len=oDivs.length;i<len;i++) {
        on(oDivs[i],"mousedown",DRAG.down)

    }

/*
    *//*属于模块化开发,单利模式*//*
    DRAG.down();
    DRAG.move();
    *//*module model 模块模式*/














