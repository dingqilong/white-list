
			/* Title: Immediate functions
			 Description: syntax that enables function execution as soon as it is defined
			 */

			(function () {
				console.log('watch out!');
			}());

			//alternative with less parentheses
			!function () {
				console.log('watch out!');
			}();
			
			//another alternative with less parentheses
			+function () {
				console.log('watch out!');
			}();
			
			//crockfords the good part book way of doing this
			(function () {
				console.log('watch out!');
			}());


			// reference
			// http://www.jspatterns.com/
			// http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate
		