
			/* Title: Shim Sniffing
			 * Description: 
			 */

			// antipattern
			Array.prototype.map = function() {
				// stuff
			};

			// better 
			if (!Array.prototype.map) {
				Array.prototype.map = function() {
					// stuff
				};
			}

			// even better
			if (typeof Array.prototype.map !== "function") {
				Array.prototype.map = function() {
					// stuff
				}
			}


			// If use either native or your own implementation, but not others:
			// When you call toString() of a native function it should return a string with a function that has a body of [native code] 

			// by default there is white spaces and new lines issue
			console.log(Array.prototype.map.toString().replace(/\s/g, '*'));
			// "*function*map()*{*****[native*code]*}*"  // IE
			// "function*map()*{*****[native*code]*}" // FF
			// "function*map()*{*[native*code]*}" // Chrome

			// a proper check can fix the problem
			console.log(Array.prototype.map.toString().replace(/\s/g, ''));
			// "functionmap(){[nativecode]}"

			// a reusable shim() function
			function shim(o, prop, fn) {
				var nbody = "function" + prop + "(){[nativecode]}";
				if (o.hasOwnProperty(prop) &&
					o[prop].toString().replace(/\s/g, '') === nbody) {
					// native!
					return true;
				}
				// shim
				o[prop] = fn;
			}

			// this is native, cool
			shim(
				Array.prototype, 'map',
				function(){/*...*/}
			); // true

			// this is new
			shim(
				Array.prototype, 'mapzer',
				function(){console.log(this)}
			);

			[1,2,3].mapzer(); // alerts 1,2,3

			// References
			// http://www.jspatterns.com/shim-sniffing/
		