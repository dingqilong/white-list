
//  git地址：https://github.com/daneden/animate.css
    $('button').on('click',function(){
        var $login=$('#login');
        var name= $.trim($('input').val());
        if(name==''){
            $login.addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated tada');
            });  //one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){}相当于回调
        }
    });
