
    var oDiv1=document.getElementById("div1");
    var oDiv2=document.getElementById("div2");
    var oDiv3=document.getElementById("div3");
    on(oDiv1,"mousedown",down);
    on(oDiv2,"mousedown",down);
    on(oDiv3,"mousedown",down);


    function down(e){
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
    }

    function move(e){
        this.style.left=this.x+ (e.pageX-this.mouseX)+"px";
        this.style.top=this.y+ (e.pageY-this.mouseY)+"px";
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



