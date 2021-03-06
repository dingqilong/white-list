
			/* Title: append
			 * Description: use string concatenate and set innerHTML. Note that it is recommended to use the 
			 * array.join technique to concatenate long strings.
			 */

			// antipattern
			// appending inside
			$.each(reallyLongArray, function (count, item) {
				var newLI = '<li>' + item + '</li>';
				$('#ballers').append(newLI);
			});


			// documentFragment off-DOM
			var frag = document.createDocumentFragment();
			$.each(reallyLongArray, function (count, item) {
				var newLI = $('<li>' + item + '</li>');
				frag.appendChild(newLI[0]);
			});
			$('#ballers')[0].appendChild(frag);


			// string concatenate and set innerHTML
			var myhtml = '';
			$.each(reallyLongArray, function (count, item) {
				myhtml += '<li>' + item + '</li>';
			});
			$('#ballers').html(myhtml);

			// concatenate very long strings
			var myHtmlBuffer = [];
			$.each(reallyLongArray, function(count, item) {
				myHtmlBuffer.push('<li>' + item + '</li>');
			});
			$('#ballers').html(myHtmlBuffer.join(''));

			// References
			// http://paulirish.com/2009/perf/
			// http://www.sitepen.com/blog/2008/05/09/string-performance-an-analysis/
			// http://stackoverflow.com/questions/112158/javascript-string-concatenation
			// http://stackoverflow.com/questions/153381/javascript-string-concatenation-faster-than-this-example
		