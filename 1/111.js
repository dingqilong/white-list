
    var timer;//???
//    ????
    $('#picBox').hover(function(){
        clearInterval(timer);
        $('.btn').stop(false,true).fadeIn(200);
    },function(){
        $('.btn').stop(false,true).fadeOut(200);
        timer=setInterval(function(){
            $('.pics:first').stop(false,true).animate({marginLeft:'-400px'},500,function(){
                $('.pics:first').appendTo($('#picBox')).css({marginLeft:'0px'});
            });
        },1000);
    }).trigger('mouseleave');
//    ????
    $('.btn').eq(0).on('click',function(){
        if(!$('.pics:first').is(':animated')){
            $('.pics:first').stop(false,true).animate({marginLeft:'-400px'},500,function(){
                $('.pics:first').appendTo($('#picBox')).css({marginLeft:'0px'});//???????????????????
            });
        }
    });
    $('.btn').eq(1).on('click',function(){
        if(!$('.pics:first').is(':animated')){
            $('.pics:last').prependTo($('#picBox')).css({marginLeft:'-400px'});//???????????
            $('.pics:first').animate({marginLeft:'0px'},500);//?????????,???????
        }
    });
