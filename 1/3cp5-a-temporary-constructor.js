
			/* Title: Classical Pattern #5 - A Temporary Constructor (a pattern that should be generally avoided)
			 Description: first borrow the constructor and then also set the child's prototype to point to a new instance of the constructor
			 */

			/* Basic */
			/*function inherit(C, P) {
			 var F = function () {};
			 F.prototype = P.prototype;
			 C.prototype = new F();
			 }*/

			/* Storing the Superclass */
			/*function inherit(C, P) {
			 var F = function () {};
			 F.prototype = P.prototype;
			 C.prototype = new F();
			 C.uber = P.prototype;
			 }*/

			/* Resetting the Constructor Pointer */
			/*function inherit(C, P) {
			 var F = function () {};
			 F.prototype = P.prototype;
			 C.prototype = new F();
			 C.uber = P.prototype;
			 C.prototype.constructor = C;
			 }*/

			/* in closure */
			var inherit = (function () {
				var F = function () {
				};
				return function (C, P) {
					F.prototype = P.prototype;
					C.prototype = new F();
					C.uber = P.prototype;
					C.prototype.constructor = C;
				}
			}());

			function Parent(name) {
				this.name = name || 'Adam';
			}

			// adding functionality to the prototype
			Parent.prototype.say = function () {
				return this.name;
			};

			// child constructor
			function Child(name) {
			}

			inherit(Child, Parent);

			var kid = new Child();
			console.log(kid.name); // undefined
			console.log(typeof kid.say); // function
			kid.name = 'Patrick';
			console.log(kid.say()); // Patrick
			console.log(kid.constructor.name); // Child
			console.log(kid.constructor === Parent); // false


			// reference
			// http://shop.oreilly.com/product/9780596806767.do
		