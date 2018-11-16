
    $(function(){
        $('.test').html('<div class="pic-in"></div>');
    });
    $(document).on('click','.pic-in',function(){  //给未来元素绑定事件
        var index=$(this).index('.pic-in'),_len=$('.pic-in').length,_i;
        if($(this).width()==50){
            for(_i=0;_i<_len;_i++){
                if(_i!=index){
                    $('.pic-in').eq(_i).animate({width:'50px',height:'50px','margin':'-25px 0 0 -25px'},100);
                }
            }
            $(this).animate({width:'350px',height:'350px','margin':'-175px 0 0 -175px'},100);
        }
    });
