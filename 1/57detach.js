
			/* Title: detach
			 * Description: take element off the DOM while manipulating them
			 */

			var table = $('#some-table');
			var parent = table.parent();

			table.detach();
			table.addLotsAndLotsOfRows();
			parent.append(table);


			// References
			// http://paulirish.com/2009/perf/
		