
    $('div').on('mousedown',function(e){
        var mouseX= e.pageX;
        var mouseY= e.pageY;
        $('body').on('mousemove',function(e){
            $('div').css({left:e.pageX-$('div').width()/2,top:e.pageY-$('div').height()/2});
        });
        $('body').on('mouseup',function(){
            $(this).off();
        });//off() 方法移除用.on()绑定的事件处理程序
    });
//如果是移动图片的话:img外面套不套div都可以
//$(function(){
//        $('img').on('mousedown',function(e){
//            var mouseX= e.pageX;
//            var mouseY= e.pageY;
//            $('body').on('mousemove',function(e){
//                $('img').css({left:e.pageX-$('img').width()/2,top:e.pageY-//$('img').height()/2});
//            });
//            $('body').on('mouseup',function(){
//                $('body').off();
//            });//off() 方法移除用.on()绑定的事件处理程序
//            return false;(这句话很重要，阻止浏览器默认的拖拽图片行为！！！)
//        });
//    });
