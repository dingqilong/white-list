
			/* Title: Access to the Global Object
			 * Description: access the global object without hard-coding the identifier window
			 */

			// access to the Global Object
			// this should work in ES3, ES5 and ES5-strict.
			var global = (function (g) {
				return g;
			})(this);

			// Test Cases
			// http://jsperf.com/globalx/7

			// References
			// http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/
		