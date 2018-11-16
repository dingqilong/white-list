

window.onload = function() {
	try {
		var message = document.getElementById("messge");
		message.innerHTML = "Here's the message!";
	} catch (error) {
		console.log("Error! " + error.message);
	}
};

  