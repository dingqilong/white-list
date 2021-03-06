
			/* Title: Primitive Wrappers
			 * Description: JavaScript has 3 primitive wrapper objects: number, string, boolean
			 */

			// antipattern
			// with wrappers
			var s = new String("my string");
			var n = new Number(101);
			var b = new Boolean(true);


			// preferred
			// without wrappers
			var s = "my string";
			var n = 101;
			var b = true;

			/*
			 only use primitive wrappers when you want to augment the value and persist state
			 */

			// primitive string
			var greet = "Hello there";
			// primitive is converted to an object
			// in order to use the split() method
			greet.split(' ')[0]; // "Hello"
			// attemting to augment a primitive is not an error
			greet.smile = true;
			// but it doesn't actually work
			console.log(typeof greet.smile); // "undefined"

			// primitive wrapper
			var greet = new String("Hello there");
			// split() method is called directly on the object
			greet.split(' ')[0]; // "Hello"
			// augment the object
			greet.smile = true;
			console.log(typeof greet.smile); // "boolean"


			// References
			// http://shop.oreilly.com/product/9780596806767.do
		