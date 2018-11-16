
			/* Title: Custom events using .on() and .off()
			 * Description: A really tiny pub/sub implementation for jQuery 1.7 using the two new methods(since jQuery 1.7): .on() and .off().
			 */

			/* jQuery Tiny Pub/Sub - v0.7 - 10/27/2011
			 * http://benalman.com/
			 * Copyright (c) 2011 "Cowboy" Ben Alman; Licensed MIT, GPL */

			(function($) {

			  var o = $({});

			  $.subscribe = function() {
			    o.on.apply(o, arguments);
			  };

			  $.unsubscribe = function() {
			    o.off.apply(o, arguments);
			  };

			  $.publish = function() {
			    o.trigger.apply(o, arguments);
			  };

			}(jQuery));


			// Usage:
			// Super-basic example:

			function handle(e, a, b, c) {
			  // `e` is the event object, you probably don't care about it.
			  console.log(a + b + c);
			};

			$.subscribe("/some/topic", handle);

			$.publish("/some/topic", [ "a", "b", "c" ]);
			// logs: abc

			$.unsubscribe("/some/topic", handle); // Unsubscribe just this handler

			// Or:

			$.subscribe("/some/topic", function(e, a, b, c) {
			  console.log(a + b + c);
			});

			$.publish("/some/topic", [ "a", "b", "c" ]);
			// logs: abc
			// Unsubscribe all handlers for this topic
			$.unsubscribe("/some/topic"); 

			// References
			// https://gist.github.com/1321768
		