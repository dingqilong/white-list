
    $(function(){
        var mydiv=document.getElementById('test');
        mydiv.onmousedown=function(e){
            var ev=e||window.event;
            var disX=ev.clientX-mydiv.offsetLeft;
            var disY=ev.clientY-mydiv.offsetTop;
            if(mydiv.setCapture){
                mydiv.setCapture();//解决IE8以下文本层问题
            }
            document.onmousemove=function(e){
                var ev=e||window.event;
                mydiv.style.left=ev.clientX-disX+'px';
                mydiv.style.top=ev.clientY-disY+'px';
            };
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;
                if(mydiv.releaseCapture){
                    mydiv.releaseCapture();
                }
            };
            return false;
        }
    });
