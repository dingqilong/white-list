
    $(function(){
        var j=0;
        var liPos=[];//存放li的初始位置
        var myLi=$('.pics').find('li');
        var liWidth=myLi.eq(0).width();
        for(var i=0;i<myLi.length;i++){
            liPos[i]=myLi[i].offsetLeft;//存每一个li的位置
        }
        for(var i=0;i<myLi.length;i++){
            myLi[i].style.position='absolute';
            myLi[i].style.left=liPos[i]+'px';//不要忘记px
        }
        $('.btn').find('a').eq(0).on('click',function(){
            var n=0;
            for(var k=0;k<myLi.length;k++){
                if(myLi.eq(k).is(':animated')){
                    n++;
                }
            }
            if(n==0){
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
                $('.caret').animate({left:315+'px'},350);
                j=myLi.length-2;
                myLi.eq(myLi.length-1).animate({left:liWidth*7+'px',opacity:'0'},350);
                var rightGo1=setInterval(function(){
                    myLi.eq(j).animate({left:liWidth*7+'px',opacity:'0'},350);
                    j--;
                    if(j<myLi.length/2){
                        clearInterval(rightGo1);
                        picPrev();
                    }
                },70);
                function picPrev(){
                    var rightGo2=setInterval(function(){
                        myLi.eq(j).animate({left:liPos[j]+'px',opacity:'1'},350);
                        j--;
                        if(j<0){
                            clearInterval(rightGo2);
                        }
                    },70);
                }
            }
        });
        $('.btn').find('a').eq(1).on('click',function(){
            var n=0;
            for(var k=0;k<myLi.length;k++){
                if(myLi.eq(k).is(':animated')){
                    n++;
                }
            }
            if(n==0){
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
                $('.caret').animate({left:405+'px'},350);
                j=1;
                myLi.eq(0).animate({left:-liWidth*2+'px',opacity:'0'},350);
                var leftGo1=setInterval(function(){
                    myLi.eq(j).animate({left:-liWidth*2+'px',opacity:'0'},350);
                    j++;
                    if(j>=myLi.length/2){
                        clearInterval(leftGo1);
                        picNext();
                    }
                },70);
                function picNext(){
                    var leftGo2=setInterval(function(){
                        myLi.eq(j).animate({left:liPos[j-myLi.length/2]+'px',opacity:'1'},350);
                        j++;
                        if(j>=myLi.length){
                            clearInterval(leftGo2);
                        }
                    },70);
                }
            }
        });
    });
