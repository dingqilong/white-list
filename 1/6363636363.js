
    $(function(){
        var btn=document.getElementById('mybtn');
        var mydiv=document.getElementById('mydiv');
        var iSpeed=0;
        var timer=null;
        btn.onclick=function(){
            startMove();
        };
        function startMove(){
            clearInterval(timer);
            timer=setInterval(function(){
                iSpeed+=3;//加速运动，模拟下落过程
                var T=mydiv.offsetTop+iSpeed;
                if(T>=(document.documentElement.clientHeight-mydiv.offsetHeight)){
                    T=document.documentElement.clientHeight-mydiv.offsetHeight;
                    iSpeed=-iSpeed;
                    iSpeed*=0.75;//摩擦系数，相当于每次弹回都会损失速度
                }
                mydiv.style.top=T+'px';
            },30)
        }
    });
