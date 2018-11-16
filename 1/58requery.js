
			/* Title: requery
			 * Description: avoid requery by using jQuery chaining
			 */

			// antipattern
			// create and append your element
			$(document.body).append("<div class='baaron' />");
				// requery to bind stuff
				$("div.baaron").click(function () {
			});


			// preferred 1
			// swap to appendTo to hold your element
			$("<div class='baaron' />")
				.appendTo(document.body)
				.click(function () {
					// do stuff
				});
					
			// preferred 2
			// cache the selector
			var $baaron = $("<div class='baaron' />").appendTo(document.body);
			
			$baaron.click(function () {
				// do stuff
			});


			// References
			// http://paulirish.com/2009/perf/
		