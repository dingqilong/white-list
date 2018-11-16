
    var timer;//定时器
    var i=0;//图片编号
//    自动播放
    $('.content').hover(function(){
        clearInterval(timer);
        $('.left').stop(false,true).animate({left:'0px'},200);
        $('.right').stop(false,true).animate({left:'480px'},200);
    },function(){
        $('.left').stop(false,true).animate({left:'-40px'},200);
        $('.right').stop(false,true).animate({left:'520px'},200);
        timer=setInterval(function(){
            i++;
            if(i>4){
                i=0;
            }
            $('.circles li').eq(i).addClass('red').siblings().removeClass('red');
            $('.picBox').stop(false,true).animate({marginLeft:-520*i+'px'},500);
        },1000);
    }).trigger('mouseleave');
//    点击左右
    $('.left').on('click',function(){
       if(!$('.picBox').is(':animated')){
           i--;
           if(i<0){
               i=4;
           }
           $('.circles li').eq(i).addClass('red').siblings().removeClass('red');
           $('.picBox').stop(false,true).animate({marginLeft:-520*i+'px'},500);
       }
    });
    $('.right').on('click',function(){
        if(!$('.picBox').is(':animated')){
            i++;
            if(i>4){
                i=0;
            }
            $('.circles li').eq(i).addClass('red').siblings().removeClass('red');
            $('.picBox').stop(false,true).animate({marginLeft:-520*i+'px'},500);
        }
    });
//    点击li
    $('.circles li').on('click',function(){
        if(!$('.picBox').is(':animated')){
            var picIndex=$(this).index();
            i=picIndex;
            $(this).addClass('red').siblings().removeClass('red');
            $('.picBox').stop(false,true).animate({marginLeft:-520*picIndex+'px'},500);
        }
    });
