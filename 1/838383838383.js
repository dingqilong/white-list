
    $(function(){
        var n=0;
        var myLi=$('#picLists').find('li');
        for(var i=0;i<myLi.length;i++){
            myLi.eq(i).css({left:i*200+'px'});
        }
        myLi.hover(function(){
            var liIndex=$(this).index();
            for(var j=1;j<=liIndex;j++){
                myLi.eq(j).stop().animate({left:j*100+'px'},300);
            }
            for(var j=liIndex+1;j<myLi.length;j++){
                myLi.eq(j).stop().animate({left:500+j*100+'px'},300);
            }
        },function(){
            for(var i=0;i<myLi.length;i++){
                myLi.eq(i).stop().animate({left:i*200+'px'},300);
            }
        });
    });
