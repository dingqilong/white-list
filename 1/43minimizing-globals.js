
			/* Title: Minimizing Globals
			 Description: they are declared outside of any function or simply used without being declared
			 */

			myglobal = "hello"; // antipattern
			console.log(myglobal); // "hello"
			console.log(window.myglobal); // "hello"
			console.log(window["myglobal"]); // "hello"
			console.log(this.myglobal); // "hello"

			// If you have to (gun to your head) use globals like jQuery does think of using a prefix and holding all your information in an object
			prefix_myglobal = {
			    method: function () {},
			    property: "hello"
			};

			// References
			// http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/
		