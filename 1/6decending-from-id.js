
			/* Title: Decending from id
			 * Description: be more specific, better to descend from an id
			 */

			// antipattern
			var arms = $('.container div.robotarm');


			// better
			var arms = $('#container div.robotarm');


			// preferred
			var arms = $('#container').find('div.robotarm');


			// References
			// http://paulirish.com/2009/perf/
		