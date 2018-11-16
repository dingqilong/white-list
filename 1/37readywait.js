
	(function() {
		var released = false;
		// Hold on jQuery!
		jQuery.holdReady( true );

		setTimeout( function() {
			released = true;
			jQuery.holdReady( false );
		}, 300 );

		jQuery(function() {
			jQuery( "#output" ).text( "Ready called, holdReady released: " + released );
			startIframeTest( released );
		});
	})();
	