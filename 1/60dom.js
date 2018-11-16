
window.onload = function() {

	//
	//  matches the first li element with the class "song"
	//
	var li = document.querySelector("#playlist .song");

	console.log("Matched the song " + li.innerHTML);


	// 
	// create a new element and add it to the page
	//
	var newItem = document.createElement("li");
	newItem.innerText = "Your Random Heart";
	var ul = document.getElementById("playlist");
	ul.appendChild(newItem);
}
  