
			/* Title: Classical Pattern #1 - The Default Pattern (a pattern that should be generally avoided)
			 Description: create an object using the Parent() constructor and assign this object to the Child()'s prototype
			 */

			function inherit(C, P) {
				C.prototype = new P();
			}

			// the parent constructor
			function Parent(name) {
				this.name = name || 'Adam';
			}
			// adding functionality to the prototype
			Parent.prototype.say = function () {
				return this.name;
			};
			// empty child constructor
			function Child(name) {
			}

			// inheritance magic happens here
			inherit(Child, Parent);

			var kid = new Child();
			console.log(kid.say()); // "Adam"

			// Drawback 1: own properties added to `this` is inherited
			var kiddo = new Child();
			kiddo.name = "Patrick";
			console.log(kiddo.say()); // "Patrick"


			// Drawback 2: it doesn't enable you to pass parameters to the child constructor
			var s = new Child('Seth');
			console.log(s.say()); // "Adam"


			// reference
			// http://shop.oreilly.com/product/9780596806767.do
		