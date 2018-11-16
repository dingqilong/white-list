
		document.querySelector(".hamburger").onclick = function() {
			document.body.className = document.body.className === "navigating" ? "" : "navigating"
			document.querySelector("h1 + ul").onclick = function() {
				document.body.className = ''
			}
		}
		