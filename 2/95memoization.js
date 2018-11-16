
			/* Title: Memoization
			 Description: use function properties to avoid repeated computation
			 */

			// antipattern
			// reason see: https://github.com/shichuan/javascript-patterns/issues/6
			var myFunc = function (param) {
				if (!myFunc.cache[param]) {
					var result = {};
					// ... expensive operation ...
					myFunc.cache[param] = result;
				}
				return myFunc.cache[param];
			};

			// cache storage
			myFunc.cache = {};


			// preferred method 1
			// only one argument using param

			var myFunc = function (param) {
				if (!myFunc.cache.hasOwnProperty(param)) {
					var result = {};
					// ... expensive operation ...
					myFunc.cache[param] = result;
				}
				return myFunc.cache[param];
			};

			// cache storage
			myFunc.cache = {};


			// preferred method 2
			// multiple arguments using JSON stringify
			
			// this will only work correctly for primitive (and Array) arguments, 
			// since the order in which properties of Objects are enumerated is undetermined 
			// and can even change between enumerations. 
			// (a JSON encoder that sorts the keys won't have this issue).

			var myFunc = function () {
				var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
						result;
				if (!myFunc.cache[cachekey]) {
					result = {};
					// ... expensive operation ...
					myFunc.cache[cachekey] = result;
				}
				return myFunc.cache[cachekey];
			};

			// cache storage
			myFunc.cache = {};


			// preferred method 3
			// multiple arguments using arguments.callee

			var myFunc = function (param) {
				var f = arguments.callee,
						result;
				if (!f.cache[param]) {
					result = {};
					// ... expensive operation ...
					f.cache[param] = result;
				}
				return f.cache[param];
			};

			// cache storage
			myFunc.cache = {};
		