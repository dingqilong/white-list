
    function getWidth(obj){
        var liNum=$(obj).find('li').length;
        $(obj).width(liNum*200);
    }
    $(function(){
        var myUl=$('#myUl');//动态设置ul的宽度
        var myLi=myUl.find('li');
        getWidth(myUl);
    });
    $('#myLeft').on('click',function(){
        var myUl=$('#myUl');
        var myLi=myUl.find('li');
        var picNum=2;//一次想让几张图片移动
        if(!myUl.is(':animated')){
            for(var i=0;i<picNum;i++){
                var newLi=myLi.eq(i).clone(true);
                myUl.append(newLi);
                getWidth(myUl);
            }
            myUl.animate({
                left:'-='+picNum*200+'px'//注意这个写法！锋利的jQuery P139，每次减少picNum*200
            },500,function(){
                for(var i=0;i<picNum;i++){
                    myLi.eq(i).remove();//移动完成后，将移出去的图片节点删除，同时将ul的left设置为0
                    myUl.css({left:'0px'});
                }
            });
        }
    });
    $('#myRight').on('click',function(){
        var myUl=$('#myUl');
        var myLi=myUl.find('li');
        var totalPic=5;
        var picNum=2;//一次想让几张图片移动
        if(!myUl.is(':animated')){
            for(var i=totalPic;i>totalPic-picNum;i--){
                var newLi=myLi.eq(i-1).clone(true);
                myUl.prepend(newLi);
                myUl.css({left:-picNum*200+'px'});
                getWidth(myUl);
            }
            myUl.animate({left:'+='+200*picNum+''},500,function(){
                for(var i=myLi.length;i>myLi.length-picNum;i--){
                    myLi.eq(i-1).remove();
                }
            });
        }
    });
