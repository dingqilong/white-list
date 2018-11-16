
window.onload = function(){
	var oUl = document.getElementsByTagName('ul')[0];
	var aLiUl = oUl.getElementsByTagName('li');
	
	var oOl = document.getElementsByTagName('ol')[0];
	var aLiOl = oOl.getElementsByTagName('li');
	
	var oneHeight = aLiUl[0].offsetHeight;
	var iNow = 0;
	var timer = null;
	
	var oBox = document.getElementById('box');
	
	for(var i=0;i<aLiOl.length;i++){
		aLiOl[i].index = i;
		aLiOl[i].onmouseover = function(){
			for(var i=0;i<aLiOl.length;i++){
				aLiOl[i].className = '';
			}
			this.className = 'active';
			
			iNow = this.index;
			
			startMove( oUl , { top : - this.index*oneHeight } );
			
		};
	}
	
	timer = setInterval(toRun,2000);
	
	oBox.onmouseover = function(){
		clearInterval(timer);
	};
	oBox.onmouseout = function(){
		timer = setInterval(toRun,2000);
	};
	
	function toRun(){
		if(iNow == aLiOl.length-1){
			iNow = 0;
		}
		else{
			iNow++;
		}
		for(var i=0;i<aLiOl.length;i++){
			aLiOl[i].className = '';
		}
		aLiOl[iNow].className = 'active';
		startMove( oUl , { top : - iNow*oneHeight } );
		
	}
	
};
