
			/* Title: Returning functions
			 Description: one function returns another function or create another function on-demand
			 */

			var setup = function () {
				console.log(1);
				return function () {
					console.log(2);
				};
			};
			// using the setup function
			var my = setup(); // alerts 1
			my(); // alerts 2


			 
			// Your setup function can store some private data in a closure and use that data somehow.
			// Here setup() creates a counter function, which gives a next ID for example. But the count variable is not exposed.
			
			var setup = function () {
				var count = 0;
				return function () {
					return ++count;
				};
			};
			// usage
			var next = setup();
			//next(); // returns 1
			//next(); // returns 2
			//next(); // returns 3
			
			var newCodes = function(){  
			    var dCodes = 'one'; 
			    var dCodes2 = 'two';     
			    return [dCodes, dCodes2];  
			};
			
			var codes = newCodes();
			var dCodes = codes[0]; //access the first
			var dCodes2 = codes[1]; //access the second
			
			var newCodes = function(){  
			    var dCodes = 'one'; // Linked ICDs  
			    var dCodes2 = 'two'; //Linked CPTs       
			    return {
			        dCodes: dCodes,
			        dCodes2: dCodes2
			    };  
			};
			
			var codes = newCodes();
			var dCodes = codes.dCodes; //access the one called dcodes
			var dCodes2 = codes.dCodes2; //access the one called dcodes2
			
			// reference
			// http://www.jspatterns.com/returning-functions/
		