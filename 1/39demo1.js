
//here,we sure control code run in order
//we can use the function callback stack
	function want(){
		console.log("this code is you want to run")
	}
	function fn(someFunction){
		console.log("there is much code need deal with");
		//other code run completely,finally,running callback function
		someFunction && someFunction();
	}
	fn(want);
