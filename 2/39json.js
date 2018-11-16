
			/* Title: Working with JSON
			 * Description: use library from JSON.org or YUI, jQuery library
			 */

			// an input JSON string
			var jstr = '{"mykey": "my value"}';

			// antipattern
			var data = eval('(' + jstr + ')');


			// preferred
			// JSON.org library
			var data = JSON.parse(jstr);
			console.log(data.mykey); // "my value"


			// References
			// http://shop.oreilly.com/product/9780596806767.do
		