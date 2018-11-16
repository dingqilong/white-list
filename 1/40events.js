
window.onload = function() {
	var div = document.getElementById("clickme");
	if (div.addEventListener) {
		div.addEventListener("click", handleClick, false);
	} else if (div.attachEvent) {
		div.attachEvent("click", handleClick);
	}
};

function handleClick(e) {
	var evt = e || window.event;
	var target;
	if (evt.target) {
		target = evt.target;
	} else {
		target = evt.srcElement;
	}
	alert("You clicked on " + target.id);
}

  