
    $(function(){
        var mydiv=document.getElementById('mydiv');
        var iSpeedX=10;
        var iSpeedY=10;
        startMove();
        function startMove(){
            setInterval(function(){
                var newLeft=mydiv.offsetLeft+iSpeedX;
                var newTop=mydiv.offsetTop+iSpeedY;
                if(newTop<=0){
                    newTop=0;
                    iSpeedY=-iSpeedY;
                }
                if(newTop>=(document.documentElement.clientHeight-mydiv.offsetHeight)){//在带有<!DOCTYPE>的页面中用documentElement取代document.body
                    newTop=document.documentElement.clientHeight-mydiv.offsetHeight;
                    iSpeedY=-iSpeedY;
                }
                if(newLeft<=0){
                    newLeft=0;
                    iSpeedX=-iSpeedX;
                }
                if(newLeft>=(document.documentElement.clientWidth-mydiv.offsetWidth)){
                    newLeft=document.documentElement.clientWidth-mydiv.offsetWidth;
                    iSpeedX=-iSpeedX;
                }
                mydiv.style.left=newLeft+'px';//原生js中px不能少
                mydiv.style.top=newTop+'px';
            },20);
        }
    });
