
			/* Title: Function Declarations
			 * Description: creating anonymous functions and assigning them to a variable
			 */

			// antipattern
			// there is one benefit for this type of function decalaration:
			// you can call getData () before the declaration. 
			function getData() {
			}


			// preferred
			/* Benefits:
			 * 1. Makes it easier to understand "functions as an object".
			 * 2. It enforces good semicolon habits.
			 * 3. Doesn't have much of the baggage traditionally associated with functions and scope.
			 */
			var getData = function () {
			};


			// named function expression
			/* Benefits:
			 * 1. Provides the debugger with an explicit function name: helps stack inspection.
			 * Issues:
			 * 3. Can break IE, coffeescript doesn't do function names:
			 *    https://github.com/jashkenas/coffee-script/issues/366
			 */
			var getData = function getData () {
			};

                        // named function expression + 'F'
			/* Benefits:
			 * 1. Gets rid of (anonymous function) in stack traces
			 * 2. Doesn't break an IE (well, unless there's a function name collision of the sort described here: https://github.com/jashkenas/coffee-script/issues/366#issuecomment-242134)
			 */
			var getData = function getDataF () {
			};


			// References
			// http://ejohn.org/blog/javascript-as-a-first-language/
			// http://kangax.github.com/nfe/
		