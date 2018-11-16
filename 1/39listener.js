

window.addEventListener("load", init, false);

function init() {
    var div = document.getElementById("clickme");
    div.addEventListener("click", handleClick, false); 
}
function handleClick(e) {
    var target = e.target;;  
    alert("You clicked on " + target.id);
    target.removeEventListener("click", handleClick, false);
}

/*
window.onload = function() {
    var div = document.getElementById("clickme");
    div.addEventListener("click", handleClick, false); 
    div.addEventListener("click", handleClickAgain, false); 
};  
function handleClickAgain() {
	alert("Another click handler just executed!");
}
*/
  