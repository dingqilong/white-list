

			function next() {
				var count = 1;
				next = function () {
					return ++count;
				};
				return count;
			}
			console.log(next()); // 1
			console.log(next()); // 2
		