
    var oDiv=document.getElementById("div1");
    var flag=1;
    oDiv.onmouseover=function(event) {
        if(flag){
            var event=event||window.event;
            var newDiv=document.createElement("div");
            newDiv.id="newDiv";
            newDiv.innerHTML="哈哈哈哈哈哈哈哈哈哈";
            newDiv.style.left=event.clientX+"px";
            newDiv.style.top=event.clientY+"px";
            document.body.appendChild(newDiv);
            flag=0;
        }
    };
    oDiv.onmousemove=function(event) {
        event=event||window.event;
        var newDiv=document.getElementById("newDiv");
        newDiv.style.left=event.clientX+10+"px";
        newDiv.style.top=event.clientY+20+"px";
    };
    oDiv.onmouseout= function (event) {
        document.body.removeChild(newDiv);
        flag=1;
    };

    //pageX;pageY;鼠标距离文档(当前页面的)最上角的距离；不支持IE678;
    //clientX;clientY;指的是浏览器；
    //onmouseover和onmouseenter区别；over会传播，enter是不传播的；
    //onmouseout和onmouselive区别；

    // onmouseover和onmouseenter很像，但是可以避免onmouseover的一些问题；
    // 如果是从父元素到子元素，不会触发onmouseover;
    // 如果是从子元素到父元素，也不会触发onmouseover；

    //阻止事件传播/冒泡的方法；
/*    this.appendChild(ele);
    ele.onmouseover=function(event){
        event=event||window.event;
        if(event.stopPropagation){
            event.stopPropagation();//标准留言器中禁止冒泡；
            //stopPropagation是禁止传播的意思；
            // preventDefault中文意思是阻止默认行为；
        }else{
            event.cancelBubble=true;//IE浏览器禁止冒泡；IE678;cancelBubble中文是取消冒泡的意思；
        }
    }*/











