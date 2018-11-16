
    var oDiv=document.getElementById("div1");
    oDiv.onmousedown=down;
    /*第一步*/
    function down(e){
        this.x=this.offsetLeft;
        this.y=this.offsetTop;
        this.mouseX=e.clientX;
        this.mouseY=e.clientY;
        /*下面是把数鼠标移动和松开绑定到move和up；*/
        this.onmousemove=move;
        this.onmouseup=up;
    };
    /*第二步*/
    function move(e){
        this.style.top=this.y+(e.clientY-this.mouseY)+"px";
        this.style.left=this.x+(e.clientX-this.mouseX)+"px";
    };
    /*第三步*/
    function up(e){
        this.onmousemove=null;
        this.onmouseup=null;
    };
