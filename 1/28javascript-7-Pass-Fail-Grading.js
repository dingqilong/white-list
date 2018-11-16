
var mark = prompt("Enter Obtained Mark:","");
//Suppose Pass Mark of Each Subject 70%
var pass="You're passed!";
var fail="You're Failed!";
	if(mark < 55){
	alert(fail+" and Grade is F");		
	}else if(mark <= 69 ){
	alert(pass+" and Grade is C");		
	}else if(mark <= 79 ){
	alert(pass+" and Grade is B");		
	}else if(mark <= 82 ){
	alert(pass+" and Grade is B+");		
	}else if(mark <= 86 ){
	alert(pass+" and Grade is A-");		
	}else if(mark <= 100 ){
	alert(pass+" and Grade is A");		
	}else{	
		alert(" Invalid Number");
		}
