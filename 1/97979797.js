
    function appendLi(){
        var ulList=$('.cont>ul');
        var ul1_h=ulList[0].offsetHeight;
        var ul2_h=ulList[1].offsetHeight;
        var ul3_h=ulList[2].offsetHeight;
        var ul4_h=ulList[3].offsetHeight;
        var minUl=Math.min(ul1_h,ul2_h,ul3_h,ul4_h);
        var min_ul;
        var lis;
        var classH;
        for(var i=0;i<ulList.length;i++){
            if(ulList[i].offsetHeight == minUl){
                min_ul=ulList[i];
            }
            classH=getRandomHeight();
            lis='<li class="h'+classH+'"></li>';
        }
        $(min_ul).append(lis);
    }
    function getRandomHeight(){
        return Math.floor(Math.random()*3+1);
    }
    $(function(){
         for(var i=0;i<20;i++){
             appendLi();
         }
    });
//    window.onscroll=function(){
//        var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
//        var docH=document.documentElement.offsetHeight;  //整个文档高度
//        var winH=document.documentElement.clientHeight;  //窗口高度
//        if(docH-winH == scrollTop){  //滚动条距离底部100px  妈的照理说这里没错，不晓得为毛谷歌里面拉到底的时候非要拉上来再往下拉才可以
//            appendLi();
//        }
//    };
    $(window).on('scroll',function(){
        if($(document).scrollTop() + $(window).height() > $(document).height() - 20){
            $(document).scrollTop($(document).scrollTop()-10);  //拉到底就把滚动条往上少拉10px
            appendLi();
        }
    });
