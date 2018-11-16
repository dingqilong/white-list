
		/*!
		 * jQuery namespaced 'Starter' plugin boilerplate
		 * Author: @dougneiner
		 * Further changes: @addyosmani
		 * Licensed under the MIT license
		 */

		;(function ( $ ) {
			if ( ! $.myNamespace ) {
				$.myNamespace = {};
			}

			$.myNamespace.myPluginName = function ( el, myFunctionParam, options ) {

				// To avoid scope issues, use 'base' instead of 'this'
				// to reference this class from internal events and functions.
				var base = this;

				// Access to jQuery and DOM versions of element
				base.$el = $( el );
				base.el = el;

				// Add a reverse reference to the DOM object
				base.$el.data( "myNamespace.myPluginName" , base );

				base.init = function () {
					base.myFunctionParam = myFunctionParam;

					base.settings = $.extend( {}, $.myNamespace.myPluginName.defaults, options );

					// Put your initialization code here

				};

				// Sample Function, Uncomment to use
				// base.functionName = function( paramaters ){
				//
				// };

				// Run initializer
				base.init();
			};

			$.myNamespace.myPluginName.defaults = {
				myDefaultValue: ""
			};

			$.fn.mynamespace_myPluginName = function( myFunctionParam, options ) {
				return this.each( function () {
					( new $.myNamespace.myPluginName( this, myFunctionParam, options ) );
				});
			};

		} )( jQuery );


		// References
		/*
		Namespacing in JavaScript (by Angus Croll) - http://goo.gl/eul12
		Use Your $.fn jQuery Namespace (by Ryan Florence) - http://goo.gl/QQIC6
		JavaScript Namespacing (by Peter Michaux) - http://goo.gl/24t8N
		Modules and namespaces in JavaScript (by Axel Rauschmayer) - http://goo.gl/6XuqO
		Essential jQuery Plugin Patterns (by Addy Osmani) - http://goo.gl/oE0ge
		*/
		