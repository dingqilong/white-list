
			/* Title: Universal Selector
			 * Description: better use of universal selector
			 */

			// antipattern 1
			$('.buttons > *')


			// preferred 1
			$('.buttons').children()


			// antipattern 2
			$('.gender :radio')
			$('.gender *:radio')


			// preferred 2
			$('.gender input:radio')


			// References
			// http://paulirish.com/2009/perf/
		