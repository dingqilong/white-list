
			/* Title: Module Pattern - Augmentation
			 Description: This pattern import modules, and add properties, then export it.  It has adventage for developing large applications.
			 */
			
			var MODULE = (function (my) {
				my.anotherMethod = function () {
					// added method...
				};

				return my;
			}(MODULE));

			
			// Reference
			// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
			
		