
			/* Title: Module Pattern - clone and inheritance Augmentation
			 Description: This pattern import modules, and add properties, then export it.  It has adventage for developing large applications.  And the new module object will inheritance the old one.
			 */
			var MODULE_TWO = (function (old) {
				var my = {},
					key;

				// let my object inherience property
				for (key in old) {
					if (old.hasOwnProperty(key)) {
						my[key] = old[key];
					}
				}

				var super_moduleMethod = old.moduleMethod;
				my.moduleMethod = function () {
					// override method on the clone, access to super through super_moduleMethod
				};

				return my;
			}(MODULE));

			
			// Reference
			// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
			
		