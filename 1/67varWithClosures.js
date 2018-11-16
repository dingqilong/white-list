
window.onload = function() {
	var button = document.getElementById("button");
	button.onclick = function() {
		var body = document.querySelector("body");
		for (var i = 0; i < 3; i++) {
			var div = document.createElement("div");
			div.id = "div" + i;
			div.innerHTML = "This is div " + i;
			div.onclick = function() {
				console.log("You just clicked div " + i);
			};
			body.appendChild(div);
		}
	};
};
