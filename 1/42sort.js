

var zoo=["zebras","lions","apes", "tigers"];
var sortedZoo=zoo.sort();

document.writeln("Sorted: "+sortedZoo);
//Sorted Result: apes,lions,tigers,zebras 
var newZoo="";
for(var counter=0; counter<sortedZoo.length; counter++){
	newZoo+=(zoo[counter]+"<br/>");
	}
	document.write("<p style='color:red'>Alphabetical Animals</p>"+newZoo);
var nums=[40,60,50,30];
document.writeln(nums.sort());
