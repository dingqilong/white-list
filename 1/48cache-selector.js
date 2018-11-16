
			/* Title: selector cache
			 Description: using selector cache to avoid requery
			 */

			// antipattern
			$('.list-item').click(function () {
				$('.photo').hide();
			});


			// preferred
			var $photo;
			// prefix the cache with $ to help identify it as a selector cache later
			$('.list-item').click(function () {
				$photo = $photo || $('.photo');
				$photo.hide();
			});


			// References
			// http://ejohn.org/blog/learning-from-twitter/
		