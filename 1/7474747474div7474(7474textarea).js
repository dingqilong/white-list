
    $(function(){
        var mydiv=document.getElementById('mydiv');
        mydiv.onmousedown=function(e){
            var ev=e||window.event;
            var divW=mydiv.offsetWidth;
            var divH=mydiv.offsetHeight;
            var disX=ev.clientX;
            var disY=ev.clientY;
            document.onmousemove=function(e){
                var ev=e||window.event;
                mydiv.style.width=ev.clientX-disX+divW+'px';
                mydiv.style.height=ev.clientY-disY+divH+'px';
            };
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;
            };
            return false;
        }
    });
