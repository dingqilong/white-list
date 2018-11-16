

	function display(text) { 
		var messagePara = document.getElementById("message"); 
		messagePara.innerHTML = messagePara.innerHTML + text;
	}

	var tick = true;

	function ticker() {
		if (tick) {
			display("TICK");
			tick = false;
		} else {
			display("TOCK");
			tick = true;
		}
	}

	window.onload = function() {
		setInterval(ticker, 1000);
	}

  