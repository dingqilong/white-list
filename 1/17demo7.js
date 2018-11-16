
window.onload = function(){
	var oUl = document.getElementsByTagName('ul')[0];
	var aLiUl = oUl.getElementsByTagName('li');
	
	var oOl = document.getElementsByTagName('ol')[0];
	var aLiOl = oOl.getElementsByTagName('li');
	
	var oneWidth = aLiUl[0].offsetWidth;
	var iNow = 0;
	var bBtn = true;
	
	for(var i=1;i<aLiUl.length;i++){
		aLiUl[i].style.left = oneWidth + 'px';
	}
	
	
	for(var i=0;i<aLiOl.length;i++){
		aLiOl[i].index = i;
		aLiOl[i].onmouseover = function(){
			
			if(bBtn){
				bBtn = false;
			for(var i=0;i<aLiOl.length;i++){
				aLiOl[i].className = '';
			}
			this.className = 'active';
			
			if(iNow < this.index){
				aLiUl[this.index].style.left = oneWidth + 'px';
				startMove( aLiUl[iNow] , { left : - oneWidth } );
			}
			else if(iNow > this.index){
				aLiUl[this.index].style.left = - oneWidth + 'px';
				startMove( aLiUl[iNow] , { left :  oneWidth } );
			}
			
			startMove( aLiUl[this.index] ,{ left : 0 },function(){
				bBtn = true;
				
			} );
			iNow = this.index;
			
			}
			
		};
	}
	
	
};
