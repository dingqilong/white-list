
			/* Title: for-in loops
			 * Description: optimized for-in loops
			 */
			// the object
			var man = {
				hands:2,
				legs:2,
				heads:1
			};
			// somewhere else in the code
			// a method was added to all objects
			if (typeof Object.prototype.clone === 'undefined') {
				Object.prototype.clone = function () {
				};
			}
			
			// antipattern
			// for-in loop without checking hasOwnProperty()
			for (var i in man) {
				console.log(i, ":", man[i]);
			}
			/*
			 * result in the console
			 * hands : 2
			 * legs : 2
			 * heads : 1
			 * clone: function()
			 */
			// preferred 1
			for (var i in man) {
				if (man.hasOwnProperty(i)) { // filter
					console.log(i, ":", man[i]);
				}
			}
			/*
			 * result in the console
			 * hands : 2
			 * legs : 2
			 * heads : 1
			 */
			// preferred 2
			// benefit is you can avoid naming collisions in case the `man` object has redefined `hasOwnProperty`
			for (var i in man) {
				if (Object.prototype.hasOwnProperty.call(man, i)) { // filter
					console.log(i, ":", man[i]);
				}
			}
			// preferred 3
			// use a local variable to "cache" `Object.prototype.hasOwnProperty`
			var i,
					hasOwn = Object.prototype.hasOwnProperty;
			for (i in man) {
				if (hasOwn.call(man, i)) { // filter
					console.log(i, ":", man[i]);
				}
			}
			
			
			//Preferred 4 
			/* Check if object has properties before print output
			 *  using Object.keys(obj) and length built ins. A good method for 
			 *  not wasting resources and avoiding errors with larger objects
			 */  
			if (Object.keys(man).length > 0){
			     for (var item in man)
				 console.log(item,':',man[item]);
			} else { 
			    console.log('Empty Object');}
			
			/*	
			 * hands : 2
			 * legs : 2
			 * heads : 1
			 * clone : function() {
			 *		    }
			 */
			
			
			// References
			// http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/
		