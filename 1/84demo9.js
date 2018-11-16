
window.onload = function(){
	var oUl = document.getElementsByTagName('ul')[0];
	var aLiUl = oUl.getElementsByTagName('li');
	
	var num = Math.ceil(470/aLiUl.length);
	
	for(var i=0;i<aLiUl.length;i++){
		aLiUl[i].style.left = num*i + 'px';
	}
	
	for(var i=0;i<aLiUl.length;i++){
		aLiUl[i].index = i;
		aLiUl[i].onmouseover = function(){
			
			for(var i=0;i<aLiUl.length;i++){
				if( i <= this.index ){
					startMove( aLiUl[i],{left : i*30} );
				}
				else{
					startMove( aLiUl[i],{left : (470 - 120) + (i-1)*30} );
				}
			}
			
		};
		
		aLiUl[i].onmouseout = function(){
			for(var i=0;i<aLiUl.length;i++){
				startMove(aLiUl[i],{left : num*i});
			}
		};
	}
	
};
