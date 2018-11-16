
			/* Title: Mix-ins
			 Description: copy from any number of objects and mix them all into a new object
			 */

			function mix() {
				var arg, prop, child = {};
				for (arg = 0; arg < arguments.length; arg += 1) {
					for (prop in arguments[arg]) {
						if (arguments[arg].hasOwnProperty(prop)) {
							child[prop] = arguments[arg][prop];
						}
					}
				}
				return child;
			}

			var cake = mix(
					{eggs:2, large:true},
					{butter:1, salted:true},
					{flour:'3 cups'},
					{sugar:'sure!'}
			);

			console.dir(cake);


			// reference
			// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#mixinpatternjavascript
			// http://shop.oreilly.com/product/9780596806767.do
		