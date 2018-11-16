
		var called = false,
			error = false;

		window.onerror = function() { error = true; };

		jQuery( window ).on( "beforeunload", function( event ) {
			called = true;
			return "maybe";
		}).on( "load", function( event ) {
			$( window ).triggerHandler( "beforeunload" );
			startIframeTest( called && !error );
		});
	