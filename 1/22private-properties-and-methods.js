
			/* Title: Private Properties and Methods
			 Description: JavaScript doesn't have special syntax for private members, you can implement them using a closure
			 */

			function Gadget() {
				// private member
				var name = 'iPod';
				// privileged function
				this.getName = function () {
					return name;
				};
			}
			var toy = new Gadget();

			// `name` is undefined, it's private
			console.log(toy.name); // undefined

			// public method has access to `name`
			console.log(toy.getName()); // "iPod"

			// this will be the object
			var bob = (function () {
				// private members
				var name = "Bob";

				// implement the public interface
				var person = {
					// public method
					getName:function () {
						return name;
					}
				};
				
				return person;
			})();
			
			console.log(bob.getName()); // "Bob"
		