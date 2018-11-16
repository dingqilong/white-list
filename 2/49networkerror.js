
	$("button").live("click", function () {
		$.ajax({
			url: '/',
			error: function() {
				console.log( "abort", arguments );
			}
		}).abort();
		$.ajax({
			url: '/',
			error: function() {
				console.log( "complete", arguments );
			}
		});
		return false;
	})
	