
    $('input').on('click',function(){
        $('body').append('<div id="test"></div>');
        $('#test').css({left:($(window).width()-$('#test').width())/2,top:($(window).height()-$('#test').height())/2});
    });
    $(window).on('resize scroll',function(){
        $('#test').css({left:($(window).width()-$('#test').width())/2,top:($(window).height()-$('#test').height())/2+$(window).scrollTop()});
    });
