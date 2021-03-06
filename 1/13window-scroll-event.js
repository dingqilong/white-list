
			/* Title: window scroll event
			 * Description: avoid attaching handlers to the window scroll event
			 */

			// antipattern
			$(window).scroll(function () {
				$('.foo').something();
			});


			// preferred
			var outerPane = $details.find(".details-pane-outer"),
					didScroll = false;
			$(window).scroll(function () {
				didScroll = true;
			});

			setInterval(function () {
				if (didScroll) {
					didScroll = false;
					// Check your page position and then
					// Load in more results
					// outerPane.html();
				}
			}, 250);


			// preferred v2, timeout instead of interval - no unnecessary ticks
			var scrollTimeout;  // global for any pending scrollTimeout
			var outerPane = $details.find(".details-pane-outer");

			$(window).scroll(function () {
				if (scrollTimeout) {
					// clear the timeout, if one is pending
					clearTimeout(scrollTimeout);
					scrollTimeout = null;
				}
				scrollTimeout = setTimeout(scrollHandler, 250);
			});

			scrollHandler = function () {
				// Check your page position and then
				// Load in more results
				// outerPane.html();
			};


			// References
			// http://ejohn.org/blog/learning-from-twitter/
		