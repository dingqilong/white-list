
function chnageIt(){
	var c1 = new Image();
	var n = document.forms[0].hue.value;
	n = parseInt(n);
	c1.src = "c3.png";
	document.images[n].src = c1.src;
	}
