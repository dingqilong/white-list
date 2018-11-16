
		jQuery( window ).on( "unload", function() {
			var ajaxStatus;
			jQuery.ajax({
				url: "../name.html",
				async: false,
				complete: function( xhr, status ) {
					ajaxStatus = status;
				}
			});
			startIframeTest( ajaxStatus );
		});

		jQuery(function() {
			setTimeout(function() {
				document.getElementById( "navigate" ).submit();
			}, 0 );
		});
	