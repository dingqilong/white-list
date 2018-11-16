
    var oInput=document.getElementsByTagName('input');
    var oDiv=document.getElementsByTagName('div');
    oInput[2].onclick=function(){
        var str=/^\S+$/;
        var oldCon=oInput[0].value;
        var newCon=oInput[1].value;
        if(!str.test(oldCon)||!str.test(newCon)){
            alert("替换内容不为空");
            return false;
        }
        oDiv[0].innerHTML=oDiv[0].innerHTML.split(oldCon).join("<span>"+newCon+"</span>");
        oInput[0].value="";
        oInput[1].value="";
    };
