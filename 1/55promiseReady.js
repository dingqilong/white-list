
jQuery.when( jQuery.ready ).done(function() {
	jQuery("body").append("<div>modifying DOM</div>");
	startIframeTest( $("div").text() === "modifying DOM" );
});
