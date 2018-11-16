
//    基本思想就是用数组中的前一个值替代后一个值,然后再赋给div当做坐标
    $('#btn').on('click',function(){
        var oText=$('#content').val();
        var aText=oText.split('');
        var x=[];//存每个文字的x坐标
        var y=[];//存每个文字的y坐标
        var xSpace=25;//文字x轴偏移量
        var ySpace=45;//文字y轴偏移量
        for(var i=0;i<aText.length;i++){
            x[i]=-50;
            y[i]=-50;
            $('body').append('<div class="move">'+aText[i]+'</div>');
        }
        $('body').on('mousemove',function(e){
            var mouseX=e.pageX || e.clientX+document.documentElement.scrollLeft;//兼容处理
            var mouseY=e.pageY || e.clientY+document.documentElement.scrollTop;
            x[0]=mouseX;
            y[0]=mouseY;
            for(var j=aText.length-1;j>=1;j--){
                x[j]=x[j-1]+xSpace;
                y[j]=y[j-1];
                $('.move').eq(j).css({left:x[j],top:y[j]});
            }
            $('.move').eq(0).css({left:x[0],top:y[0]});
        });
    });
