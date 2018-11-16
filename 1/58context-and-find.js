
			/* Title: context and find
			 * Description: better to choose `find` over `context` 
			 */

			
			var arms = $('div.robotarm', '#container');
			$('.reply_form', $(this).closest('.comment')).hide();

			// no performance gain over doing this, but a preferred pattern for readability reason
			var arms = $('#container').find('div.robotarm');
			$(this).closest('.comment').find('.reply_form').hide();
			

			// References
			// http://paulirish.com/2009/perf/
		