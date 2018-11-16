
window.onunload = function() {};
jQuery(function() {
	setTimeout(function() {
		var parent = window.parent;
		document.write("");
		startIframeTest();
	}, 200 );
	var number = 50;
	while( number-- ) {
		jQuery.ajax("../mock.php?action=wait&wait=10");
	}
});
