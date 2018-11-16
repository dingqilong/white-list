
    var oDiv=document.getElementsByTagName('div')[0];
    var myContent=oDiv.innerHTML;
    var aBtn=document.getElementsByTagName('input');
    aBtn[1].onclick=function(){
        var str=/^\S+$/;
        var myText=aBtn[0].value;
        if(!str.test(myText)){
            return false;
        }
        oDiv.innerHTML=myContent.split(myText).join("<span>"+myText+"</span>");
        aBtn[0].value='';
    }
