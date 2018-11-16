
window.onload = function(){
	var oUl = document.getElementsByTagName('ul')[0];
	var aLiUl = oUl.getElementsByTagName('li');
	
	var oOl = document.getElementsByTagName('ol')[0];
	var aLiOl = oOl.getElementsByTagName('li');
	
	var oneHeight = aLiUl[0].offsetHeight;
	
	for(var i=0;i<aLiOl.length;i++){
		aLiOl[i].index = i;
		aLiOl[i].onmouseover = function(){
			for(var i=0;i<aLiOl.length;i++){
				aLiOl[i].className = '';
			}
			this.className = 'active';
			
			startMove( oUl , { top : - this.index*oneHeight } );
			
		};
	}
	
};
