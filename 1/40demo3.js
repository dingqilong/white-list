
//here,we sure control code run in order
//in addition to,we can use the function callback stack,we also can use queue setTimeout
	function want(){
		console.log("this code is you want to run")
	}
	function fn(someFunction){
		console.log("there is much code need deal with");
		return new Promise(function(resolve, reject){
			if(typeof someFunction === 'function'){
				resolve(someFunction);
			}else{
				reject('TypeError:'+ someFunction + 'is not function')
			}
		})
		
	}
	fn(want)
	    .then(want())
	    .catch(function(error){
		    console.log(error);
	    });
	fn('123')
	    .catch(function(error){
		    console.log(error);
	})
