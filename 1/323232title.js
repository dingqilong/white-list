
    var position=0;
    var message='^_^欢迎浏览本网站';
    var x=2*(60/message.length);//要保证是两倍
    var newStr='';
    for(var i=0;i<x;i++){
        newStr+=message;
    }
    function titleTex(){
        var title=newStr.substring(position,position+60);
        position++;
        if(position==60){//刚好截取到尾巴
            position=0;
        }
        document.title=title;
    }
    setInterval(titleTex,150);
