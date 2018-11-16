
var nums=[40,60,50,30];
//document.writeln("Accending Order using sort(): "+nums.sort());
document.writeln("Decending Order using sort(): "+nums.sort(function(a, b){
	return a - b;
	}))
//document.writeln("Reverse Order using reverse: "+nums.reverse());	
