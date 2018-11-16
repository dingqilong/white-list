
window.onload = function(){
	var oUl = document.getElementsByTagName('ul')[0];
	var aLiUl = oUl.getElementsByTagName('li');
	
	var oOl = document.getElementsByTagName('ol')[0];
	var aLiOl = oOl.getElementsByTagName('li');
	
	for(var i=0;i<aLiOl.length;i++){
		aLiOl[i].index = i;
		aLiOl[i].onmouseover = function(){
			for(var i=0;i<aLiOl.length;i++){
				aLiOl[i].className = '';
				aLiUl[i].style.display = 'none';
				aLiUl[i].style.filter = 'alpha(opacity=0)';
				aLiUl[i].style.opacity = 0;
			}
			this.className = 'active';
			aLiUl[this.index].style.display = 'block';
			startMove(aLiUl[this.index],{opacity:100});
		};
	}
	
};
