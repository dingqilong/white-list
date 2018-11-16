

function makeCounter() {
	var count = 0;

	function counter() {
		count = count + 1;
		return count;
	}
	return counter;

}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());

