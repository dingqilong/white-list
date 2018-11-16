
    $(function(){
        var arr=[];
        var myLi=$('#automatic ul').find('li');
        for(var i=0;i<myLi.length;i++){
            //双重数组,存入每个元素的位置、层数和透明度以及图片的宽度(为毛只设置宽度呢？因为设置宽度就相当于设置了高度，它会自动等比列缩放)
            arr.push([myLi.eq(i).position().top,myLi.eq(i).position().left,myLi.eq(i).css('zIndex'),myLi.eq(i).css('opacity'),myLi.eq(i).width()]);
        }
        $('#btn img').eq(0).on('click',function(){
            var n=0;
            for(var j=0;j<myLi.length;j++){
                if(myLi.eq(j).is(':animated')){
                    n++;
                }
            }
            if(n==0){
                arr.push(arr[0]);
                arr.shift();
                for(var i=0;i<myLi.length;i++){
                    myLi.eq(i).css({zIndex:arr[i][2]});
                    myLi.eq(i).animate({
                        top:arr[i][0]+'px',
                        left:arr[i][1]+'px',
                        opacity:arr[i][3],
                        width:arr[i][4]+'px'
                    },250);
                }
            }
        });
        $('#btn img').eq(1).on('click',function(){
            var n=0;
            for(var j=0;j<myLi.length;j++){
                if(myLi.eq(j).is(':animated')){
                    n++;
                }
            }
            if(n==0){
                arr.unshift(arr[arr.length-1]);
                arr.pop();
                for(var i=0;i<myLi.length;i++){
                    myLi.eq(i).css({zIndex:arr[i][2]});
                    myLi.eq(i).animate({
                        top:arr[i][0]+'px',
                        left:arr[i][1]+'px',
                        opacity:arr[i][3],
                        width:arr[i][4]+'px'
                    },250);
                }
            }
        });
    });
