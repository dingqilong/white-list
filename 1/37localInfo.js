
function revealAll(){
	var cr = "\n";
	var display = "Hash:" + location.hash + cr;
	display += "Host: " + location.host + cr;
	display += "Hostname: " + location.hostname + cr;
	display += "HREF: " + location.href + cr;
	display += "Path name: " + location.pathname + cr;
	display += "Port: " + location.port + cr;
	display += "Protocol: " + location.protocol + cr;
	display += "Search: " + location.search + cr;
	alert(display);
	}
