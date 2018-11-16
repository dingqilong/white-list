
    $(function(){
        var myDiv=document.getElementById('div1');
//        ie,chrome:onmousewheel事件
//        ff:DOMMouseScroll 必须用addEventLister来绑定
//        滚轮值:ie,chrome:myev.wheelDelta上120 下-120
//               ff:myev.detail上-3 下3
        myDiv.onmousewheel=fn;
        if( myDiv.addEventListener){
            myDiv.addEventListener('DOMMouseScroll',fn,false);
        }
        function fn(ev){
            var b=true;
            var myev=ev || event;
//            判断鼠标向上还是向下滚动
            if(myev.wheelDelta){
                b=myev.wheelDelta>0?true:false;
            }else{
                b=myev.detail<0?true:false;
            }
            if(b){
                if(!$(this).is(':animated')){
                    $(this).animate({height:'-='+30+'px'},500);
                }
            }else{
                if(!$(this).is(':animated')){
                    $(this).animate({height:'+='+30+'px'},500);
                }
            }
//            阻止默认事件
//            return false阻止的是 obj.on事件名称=fn 所触发的默认行为,不能阻止addEventListener绑定的事件
//            addEventListener绑定的事件需要通过event下面的preventDefault()来阻止
            if(ev.preventDefault()){
                ev.preventDefault();
            }
            return false;
        }
    });
