
		const url = 'json_example.php';
		let result = null;
		const XHR = new XMLHttpRequest();
		XHR.open('GET', url, true);
		XHR.send();

		XHR.onreadystatechange = function(){
			if(XHR.readyState === 4 && XHR.status === 200){
				result = XHR.response;
				console.log(result);


				//第二个ajax请求
				const url1 = 'json_example1.php';
				let result1 = null;
				const XHR1 = new XMLHttpRequest();
				XHR1.open('GET', url1, true);
				XHR1.send();
				XHR1.onreadystatechange = function(){
					if(XHR1.readyState === 4 && XHR1.status === 200){
						result1 = XHR1.response;
						console.log(result1);
					}
				}
		}
	}
	