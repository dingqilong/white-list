
     var scrollTopPosition,
	     scrollLeftPosition,
		 body=document.body,
		 header=document.getElementById("header");
	//创建一个当前事件处理程序，只负责保存当前页的保存位置
	function onScroll(){
	
	    scrollTopPosition=body.scrollTop;
		scrollLeftPosition=body.scrollLeft;
		
		
	}
	function writePosition(){
	    console.log(scrollTopPosition);
	    header.innerHTML=scrollTopPosition+"px,"+scrollLeftPosition+"px";
	}
	document.addEventListener("scroll",onScroll,false);
	window.setInterval(writePosition,500);
  