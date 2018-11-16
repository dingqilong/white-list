
			function Person() {
				var that = (this === window) ? {} : this;
				that.name = name;
				that.say = function () {
					return "I am " + that.name;
				};
				return that;
			}

			// reference
			// http://www.jspatterns.com/
			// http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate
		