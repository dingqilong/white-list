
	console.log("Client started");

	console.log("Connecting...");
	var origin = "http://localhost:5020";
	var socket = io(origin);

	socket.on("connect", function() {
		console.log("Server connected");
		socket.disconnect();
		console.log("disconnect() called");
	});
