
    var flag=false;
    $('.num_btn').on('click',function(){
        if(!$('.num_box>div').is(':animated')){
            if(flag==true){
                return false;  //放置多次点击
            }
            flag=true;
            var imgH=265;
            var number=getRandomNumber()+'';
            $('.num_box>div').css('background-position-y',0);  //将所有背景图重置为0
            var numArr=number.split('');
            $('.num_box>div').each(function(index){
                var This=$(this);  //This必须写在外面，不能卸载setTimeout里面
                setTimeout(function(){
                    This.animate({'background-position-y':imgH*50-imgH*numArr[index]},6000,'swing');
                    if(parseInt(index)==3){
                        $('.response').text('摇奖结果:'+number);
                        flag=false;
                    }
                },500*index);
            });
        }
    });
    function getRandomNumber(){
        var max=9999;
        var min=0;
        var numRandom=parseInt(Math.random()*(max-min));
        var str='';
        if(0<=numRandom && numRandom<10){
            str='000'+numRandom;
        }else if(10<=numRandom && numRandom<100){
            str='00'+numRandom;
        }else if(100<=numRandom && numRandom<1000){
            str='0'+''+numRandom;
        }else{
            str=''+numRandom;
        }
        return str;
    }
