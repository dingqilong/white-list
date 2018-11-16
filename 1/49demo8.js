
window.onload = function(){
	var oUl = document.getElementsByTagName('ul')[0];
	var aLiUl = oUl.getElementsByTagName('li');
	
	for(var i=1;i<aLiUl.length;i++){
		aLiUl[i].style.left = (470 - 120) + (i-1)*30 + 'px';
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
	}
	
};
