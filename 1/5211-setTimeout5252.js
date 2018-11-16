
$(function(){
	var qq = $('qq');
	var title = $('title');
	var timer = null;
	
	qq.onmouseover = show;
	qq.onmouseout = hide;
	
	title.onmouseover = show;
	title.onmouseout = hide;
	
	function show(){
		clearInterval( timer );
		title.style.display = 'block';
	}
	function hide(){
		timer = setTimeout(function(){
			title.style.display = 'none';
		}, 200);
	}
});
