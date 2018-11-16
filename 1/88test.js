
    var area=$('div');
    var timespan=1000;//1s滚动一次
    var timeID;
    area.hover(function(){//移入清除定时器
        clearInterval(timeID);
    },function(){//移出开启定时器
        timeID=setInterval(function(){
            var moveline=area.find('li:first');//取得li的第一个元素
            var lineheight=moveline.height();//取得要移动的高度
            moveline.animate({marginTop:-lineheight+'px'},500,function(){//将第一个li往上移动50px,移动完后将其添加到ul的末尾,并将其距上一个li的高度设置为0
                moveline.appendTo('ul').css({marginTop:0});
            });
        },timespan);
    }).trigger('mouseleave');//载入页面时自动开始滚动
