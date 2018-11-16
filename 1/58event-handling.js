
			/* Title: Event Handling
			 Description: when you pass function A to function B as a parameter, function A is a callback function
			 */

			// antipattern
			/*var b = document.getElementById('clickme'),
			 count = 0;
			 b.onclick = function () {
			 count += 1;
			 b.innerHTML = "Click me: " + count;
			 };*/

			// preferred
			var b = document.getElementById('clickme');
			if (document.addEventListener) { // W3C
				b.addEventListener('click', myHandler, false);
			} else if (document.attachEvent) { // IE
				b.attachEvent('onclick', myHandler);
			} else { // last resort
				b.onclick = myHandler;
			}

			function myHandler(e) {
				var src, parts;
				// get event and source element
				e = e || window.event;
				src = e.target || e.srcElement;
				// actual work: update label
				parts = src.innerHTML.split(": ");
				parts[1] = parseInt(parts[1], 10) + 1;
				src.innerHTML = parts[0] + ": " + parts[1];
				// no bubble
				if (typeof e.stopPropagation === "function") {
					e.stopPropagation();
				}
				if (typeof e.cancelBubble !== "undefined") {
					e.cancelBubble = true;
				}
				// prevent default action
				if (typeof e.preventDefault === "function") {
					e.preventDefault();
				}
				if (typeof e.returnValue !== "undefined") {
					e.returnValue = false;
				}
			}
		