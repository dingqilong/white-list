
    $(function(){
        var timer1=null;
        var timer2=null;
        var mydiv1=document.getElementById('noWidth');
        var mydiv2=document.getElementById('noHeight');
        mydiv1.style.display='block';
        mydiv2.style.display='block';
        var oL1=mydiv1.offsetLeft;
        var oT2=mydiv2.offsetTop;
        function changeW(w){
            timer1=setInterval(function(){
                if(mydiv1.offsetWidth>=w){
                    clearInterval(timer1);
                }else{
                    mydiv1.style.width=mydiv1.offsetWidth+5+'px';//这一块计算要注意！！！
                    mydiv1.style.left=oL1-mydiv1.offsetWidth/2+'px';
                }
            },10);
        }
        changeW(300);
        function changeH(h){
            timer2=setInterval(function(){
                if(mydiv2.offsetHeight>=h){
                    clearInterval(timer2);
                }else{
                    mydiv2.style.height=mydiv2.offsetHeight+2+'px';//这一块计算要注意！！！
                    mydiv2.style.top=oT2-mydiv2.offsetHeight/2+'px';
                }
            },10);
        }
        changeH(100);
    });
