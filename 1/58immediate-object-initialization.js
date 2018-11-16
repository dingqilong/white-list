
			/* Title: Immediate object initialization
			 Description: this pattern is mainly suitable for one-off tasks
			 */

			({
				// here you can define setting values
				// a.k.a. configuration constants
				maxwidth:600,
				maxheight:400,

				// you can also define utility methods
				gimmeMax:function () {
					return this.maxwidth + "x" + this.maxheight;
				},

				// initialize
				init:function () {
					console.log(this.gimmeMax());
					// more init tasks...
				}
			}).init();

			// reference
			// http://www.jspatterns.com/
			// http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate
		