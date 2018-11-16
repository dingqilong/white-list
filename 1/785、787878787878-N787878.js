
    var oSpans=document.getElementById("menu").getElementsByTagName("span");
    for(var i=0;i<oSpans.length;i++){
        var oSapn=oSpans[i];
        var oUl=getNext(oSapn);
        if(oUl&&oUl.nodeName==="UL"){
            oUl.style.display="none";
            oSapn.style.backgroundColor="orange";
            oSapn.className="close"
        }else{
            oSapn.style.backgroundColor="#CCC";
        }

    }
    document.getElementById("menu").onclick=function(event){
        event=event||window.event;
        var target=event.target||event.srcElement;
        if(target.nodeName=="SPAN"){
            var oUl=getNext(target);
            if(oUl&&oUl.nodeName=="UL"){
                if(oUl.style.display=="none"){
                    oUl.style.display="block";
                    target.className="open"
                }else{
                    oUl.style.display="none";
                    target.className="close";
                    /*解决顶级关闭然后打开；第二级和第三级处于打开状态的bug*/
                    if(oUl.getElementsByTagName("UL")){
                        var oUls=oUl.getElementsByTagName("UL");
                        for(var i=0;i<oUls.length;i++){
                            getPre(oUls[i]).className="close";
                            oUls[i].style.display="none";
                        }
                    }
                }
            }
        }
    };

    function getNext(curEle) {//下一个弟弟节点，第一个弟弟节点；
        if ("getElementsByClassName" in window) {
            return curEle.nextElementSibling;
        }
        var next = curEle.nextSibling;
        while (next && next.nodeType !== 1) {
            next = next.nextSibling;
        }
        return next;
    };
    function getPre(curEle) {//上一个哥哥节点；
        if ("getElementsByClassName" in window) {
            return curEle.previousElementSibling;
        }
        var pre = curEle.previousSibling;
        while (pre && pre.nodeType !== 1) {
            pre = pre.previousSibling;
        }
        return pre;
    }
