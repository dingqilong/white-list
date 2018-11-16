
		$(document).ready(function() {
			$( "fieldset" ).on( "click", "input", function() {
				$( ".result" ).append( "click " + this.value + "<br />" );
			} );
		} );
	