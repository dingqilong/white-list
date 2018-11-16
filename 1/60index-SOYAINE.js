
	const boxs = document.querySelectorAll('.inbox input[type="checkbox"]');
	const boxArr = Array.from(boxs);
	
	let lastChecked;
	
//	处理方法一：用变量 inBetween 对需要选中的元素进行标记
	function handleCheck0(e) {
		let inBetween = false;
//		console.log(lastChecked);
		if(e.shiftKey && this.checked){
			boxs.forEach(input => {
				console.log(input);
				if(input === lastChecked || input ===this) {
					inBetween = !inBetween;
				}
				if(inBetween) {
					console.log("on");
					input.checked = true;
				}
		});
		}
		lastChecked = this;
	}
	
	let onOff = false;
//	处理方法二：利用数组索引获取需要选中的范围
	function handleCheck1(e) {
		if(!lastChecked) lastChecked = this;
		onOff = lastChecked.checked ? true : false;
		if(e.shiftKey) {
			let start = boxArr.indexOf(this);
			let end = boxArr.indexOf(lastChecked);
			boxArr.slice(Math.min(start, end), Math.max(start, end) + 1)
					   .forEach(input => input.checked = onOff);
			console.log(start + "+" + end);
		}
		lastChecked = this;
	}
	
	boxs.forEach(box => box.addEventListener('click', handleCheck1));
