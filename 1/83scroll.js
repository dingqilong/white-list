
function dump(event) {
	var elt = event.target || event.srcElement;
	document.getElementById('clicked').innerHTML = elt.innerHTML;
}
