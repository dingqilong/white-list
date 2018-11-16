
		/*!
		 * jQuery basic plugin boilerplate
		 */

		/*
		The most basic form of jQuery plugin
		This is great for compactness
		*/

		$.fn.myPluginName = function() {
		    // your plugin logic
		};


		/*
		A better foundation to build on
		Here, we’ve wrapped our plugin logic in an anonymous function. To ensure that our use of the $ sign as a shorthand creates no conflicts between jQuery and other JavaScript libraries, we simply pass it to this closure, which maps it to the dollar sign, thus ensuring that it can’t be affected by anything outside of its scope of execution.
		*/

		(function( $ ){
		  	$.fn.myPluginName = function() {
		    	// your plugin logic
		  	};
		})( jQuery );


		// References
		// Essential jQuery Plugin Patterns (by Addy Osmani) - http://goo.gl/oE0ge
		