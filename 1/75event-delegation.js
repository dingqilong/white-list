
			/* Title: event delegation
			 Description: event delegation pattern and antipattern
			 */

			// antipattern 
			// As of jQuery 1.7, the .live() method is deprecated
			// $('a.trigger', $('#container')[0]).live('click', handlerFn);


			// preferred
			$('#container').on('click', 'a.trigger', handlerFn);

			// .bind()
			// .live() - best used for simple scenario, it functions the best with a supply selector only, it's not chainable
			// .delegate() - it gives you a more focused way, it can better filter the elements, for example, table row


			// References
			// http://paulirish.com/2009/perf/
		