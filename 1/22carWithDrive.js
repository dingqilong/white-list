

var fiat = { 
    make: "Fiat",
    model: "500",
    year: 1957, 
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,

    start: function() {
		this.started = true;
	},

    stop: function() {
		this.started = false;
	},

    drive: function() {
		//
		// if we use started instead of this.started, 
		// our code doesn't work!
		//
		if (this.started) {
			alert("Zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
};

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();

