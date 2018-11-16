
    /*获得随机数*/
    function getRanNum(){
        var x=9999; //最大上限
        var y=1111;//下限
        var ranNum = parseInt(Math.random()*(x-y+1)+y);
        return ranNum;
    }

    var isBegin=false; //用于判断是否正在执行

    $(function(){
        var imgH=265; //每张数字图片高度
        $('.btn').click(function(){
            if(isBegin){return false;} //正在执行摇奖时，防止再次点击按键执行
            isBegin=true;
            var ranNum=getRanNum();
            $('.res').html('摇奖结果：'+ranNum);
            $('.num').css('backgroundPositionY',0);
            var numArr=(ranNum+'').split(''); //获取随机数转换为字符串并分割返回为数组
            $('.num').each(function(index){

                var ele=$(this); //当前元素jquery对象
                setTimeout(function(){ //延迟执行

                    ele.animate({'backgroundPositionY':(imgH*50)-(imgH*numArr[index])
                    },{
                        duration: 6000+index*3000,
                        easing: "easeInOutCirc",
                        complete: function(){
                            if(index==3) isBegin = false;
                        }
                    });
                },300*index);
            });//end each()
        });
    });
