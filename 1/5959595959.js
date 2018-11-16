
    var oBtn=document.getElementsByTagName("input")[0];
    var timer=null;
    oBtn.onclick=function(){
        var str=/^\S+$/;
        var myContent=document.getElementsByTagName("textarea")[0].value;
        document.getElementsByClassName("content")[1].innerHTML="";
        if(str.test(myContent)){
            var mySplit=myContent.split("");
            var n=0;
            setInterval(function(){
                if(n<mySplit.length){
                    document.getElementsByClassName("content")[1].innerHTML+=mySplit[n];
                    document.getElementsByTagName("textarea")[0].value=myContent.substring(n+1,mySplit.length);
                    n++;
                }else{
                    clearInterval(timer);
                }
            },500);
        }else{
            alert("请输入文字");
        }
    };
