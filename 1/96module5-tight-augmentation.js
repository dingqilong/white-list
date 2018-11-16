
			/* Title: Module Pattern - Tight Augmentation
			 Description: This pattern import modules, and add properties, then export it.  It has adventage for developing large applications.  And also have the authorities to old module method, and override a new one.
			 */
			
			var MODULE = (function (my) {
				var old_moduleMethod = my.moduleMethod;

				my.moduleMethod = function () {
					// method override, has access to old through old_moduleMethod...
				};

				return my;
			}(MODULE));

			
			// Reference
			// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
			
		