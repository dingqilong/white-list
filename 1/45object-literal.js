
			/* Title: Object literal
			 * Description: use the simpler and reliable object literal instead of new Object();
			 */

			// antipattern
			var car = new Object();
			car.goes = "far";


			// preferred
			var car = {goes:"far"};


			// References
			// http://shop.oreilly.com/product/9780596806767.do
		