
    var oSpan=document.getElementsByTagName('span');
    var oA=document.getElementsByTagName('a');
    var btn=true;
    var oldContent=oSpan[0].innerHTML;
    oA[0].onclick=function(){//文本展开与收缩
        if(btn){
            oSpan[0].innerHTML=oldContent.substring(0,27)+"......";
            oA[0].innerHTML=">>展开";
        }else{
            oSpan[0].innerHTML=oldContent;
            oA[0].innerHTML=">>收缩";
        }
        btn=!btn;
    };
    var myDiv=document.getElementById("ChangeCard");
    var oBtn=document.getElementsByClassName("btn");
    var Change_div=document.getElementsByClassName("Change_div");
    oBtn[0].onclick =function(){//TMD,要照顾行为页面分离,坚持用原生写出来也是醉了
        myDiv.style.display="block";
        document.getElementsByClassName("Change_div")[0].style.background="#db7093";
        document.getElementsByClassName("Change_div")[1].style.background="#fff";
        document.getElementsByClassName("myChange")[0].style.display="block";
        document.getElementsByClassName("myChange")[1].style.display="none";
    };
    oBtn[1].onclick =function(){
        myDiv.style.display="block";
        document.getElementsByClassName("Change_div")[0].style.background="#fff";
        document.getElementsByClassName("Change_div")[1].style.background="#db7093";
        document.getElementsByClassName("myChange")[0].style.display="none";
        document.getElementsByClassName("myChange")[1].style.display="block";
    };
    Change_div[0].onclick=function(){
        document.getElementsByClassName("Change_div")[0].style.background="#db7093";
        document.getElementsByClassName("Change_div")[1].style.background="#fff";
        document.getElementsByClassName("myChange")[0].style.display="block";
        document.getElementsByClassName("myChange")[1].style.display="none";
    };
    Change_div[1].onclick=function(){
        document.getElementsByClassName("Change_div")[0].style.background="#fff";
        document.getElementsByClassName("Change_div")[1].style.background="#db7093";
        document.getElementsByClassName("myChange")[0].style.display="none";
        document.getElementsByClassName("myChange")[1].style.display="block";
    };
//    下面才是正餐
//    查找
    var do_btns=document.getElementsByClassName("do_btn");
    do_btns[0].onclick=function(){
        var str=/^\S+$/;
        var myContent=oSpan[0].innerHTML;
        var mySearch=document.getElementsByClassName("myContent")[0].value;
        if(str.test(mySearch)){
            if(myContent.split(mySearch).length==1){
                alert("没有找到");
                document.getElementsByClassName("myContent")[0].value="";//清空
                return false;
            }
            oSpan[0].innerHTML=myContent.split(mySearch).join("<span style='background:#ffff00;'>"+mySearch+"</span>");
            oldContent=oSpan[0].innerHTML;
            document.getElementsByClassName("myContent")[0].value="";//清空
        }else{
            alert("请输入查找内容");
        }
    };
//    替换
    do_btns[1].onclick=function(){
        var str=/^\S+$/;
        var myContent=oSpan[0].innerHTML;
        var myChange1=document.getElementsByClassName("myContent")[1].value;
        var myChange2=document.getElementsByClassName("myContent")[2].value;
        if(!str.test(myChange1)){
            alert("请输入要替换的内容");
            return false;
        }
        if(!str.test(myChange2)){
            if(confirm("确定要删除吗?")){
                oSpan[0].innerHTML=myContent.split(myChange1).join("<span style='background:orange;'>"+myChange2+"</span>");
                document.getElementsByClassName("myContent")[1].value="";//清空
                return false;
            }
        }
        oSpan[0].innerHTML=myContent.split(myChange1).join("<span style='background:orange;'>"+myChange2+"</span>");
        oldContent=oSpan[0].innerHTML;
        document.getElementsByClassName("myContent")[1].value="";//清空
        document.getElementsByClassName("myContent")[2].value="";
    };
