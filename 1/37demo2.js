
//here,we sure control code run in order
//in addition to,we can use the function callback stack,we also can use queue setTimeout
	function want(){
		console.log("this code is you want to run")
	}
	function fn(someFunction){
		//you doesn't have to put in the last,you can be free to put it 
		someFunction && setTimeout(someFunction, 0);
		console.log("there is much code need deal with");
		
	}
	fn(want);
