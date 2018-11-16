
			/* Title: Facade
			 Description: provides a simplified interface to a large body of code
			 */

			var mobileEvent = {
				// ...
				stop:function (e) {
					e.preventDefault();
					e.stopPropagation();
				}
				// ...
			};

			// reference
			// http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/#facadepatternjavascript
			// http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate
		