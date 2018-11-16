
			/* Title: Implied Typecasting
			 * Description: avoid implied typecasting
			 */

			var zero = 0;

			/* antipattern
			 * JavaScript implicitly typecasts variables when you compare them.
			 * That's why comparisons such as false == 0 or "" == 0 return true.
			 */
			if (zero == false) {
				// this block is executed...
			}


			// preferred
			/* To avoid confusion caused by the implied typecasting,
			 * always use the === and !== operators that check both the values and the type of the expressions you compare
			 */
			if (zero === false) {
				// not executing because zero is 0, not false
			}


			/* NOTE: There's another school of thought that subscribes to the opinion that it's redundant to use === when == is
			 * sufficient. For example, when you use typeof you know it returns a string, so there's no reason to use strict
			 * equality. However, JSLint requires strict equality; it does make the code look consistent and reduces the mental
			 * effort when reading code. ("Is this == intentional or an omission?")
			 */


			// References
			// http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/
		