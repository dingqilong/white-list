
    var myContent=document.getElementsByTagName('div');
    var aBtn=document.getElementsByTagName('input');
    var aColor=["red","#ffff00","blue","green","orange"];//创建颜色数组
    aBtn[1].onclick=function(){
        var str='';
        var myText=aBtn[0].value;
        var textArray=myText.split("");//单个字符切割
        for(var i=0;i<textArray.length;i++){
            str+="<span style='background:"+aColor[i%aColor.length]+"'>"+textArray[i]+"</span>";//颜色每5个一次循环
        }
        myContent[0].innerHTML+=str;
        aBtn[0].value='';
    };
