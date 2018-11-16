
var html=prompt("Enter HTML Obtained Marks:","");
var ppt=prompt("Enter PPT Obtained Marks:","");
var js=prompt("Enter JavaScript Obtained Marks:","");
//Suppose Pass Mark of Each Subject 70%
var pass="You're passed!";
var fail="You're Failed!";
	if(html >= 70 && js >= 70 && ppt >= 70){
		alert(pass);
		document.writeln(pass);
	}else{
		alert(fail);
		document.writeln(fail);
		}
