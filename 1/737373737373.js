
    $(function(){
        var destRow=undefined;//目标行,即要改变到的行
        var curtRow;//当前点击行
        var chgRow=undefined;//要改变位置的行
        var clickcount=0;//点击次数
        $('table tr td').each(function(){
            var currentTD=$(this);
            currentTD.on('click',function(){
                clickcount+=1;//每次点击,点击次数加1
                var currentRow=currentTD.parent('tr');
                if(clickcount%2==1){//点击次数为奇数次
                    chgRow=currentRow;
                    chgRow.addClass('bgColor');
                }else{
                    destRow=currentRow;
                }
                if(destRow!=undefined && chgRow!=undefined){//只有当被改变行与目标行都存在时,才进行位置交换。该判断条件不能省略,不然单数次的时候会直接把clickcount重置,导致计数出错
                    if(chgRow.position().top>destRow.position().top){//在下面的行的top大于在上面行的top值,所以用insertBefore
                        chgRow.insertBefore(destRow);
                    }else if(chgRow.position().top<destRow.position().top){
                        chgRow.insertAfter(destRow);
                    }
                    clickcount=0;  //全部重置
                    chgRow.removeClass('bgColor');
                    destRow=undefined;
                    chgRow=undefined;
                }
            });
        });
    });
