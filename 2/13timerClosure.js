


function makeTimer(doneMessage, n) {

	setTimeout(function() {
		alert(doneMessage);
	}, n);

	doneMessage = "OUCH!";
}

makeTimer("Cookies are done!", 1000);



