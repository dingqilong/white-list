
	let res1 = null;
	function firstAjax(){
		return new Promise(function(resolve, reject){
			const url = 'json_example.php';
			let result = null;
			const XHR = new XMLHttpRequest();
			XHR.open('GET', url, true);
			XHR.send();

			XHR.onreadystatechange = function(){
				if(XHR.readyState === 4 && XHR.status === 200){
					try {  
                        var res1 = JSON.parse(XHR.responseText);  
                        resolve(res1);  
                    } catch (e) {  
                        reject(e);  
                    }  
                }
		    }
		})
		
}
function secondAjax(res){
	return new Promise(function(resolve, reject){
		//第二个ajax请求
		const url = 'json_example1.php';
		let result = null;
			const XHR = new XMLHttpRequest();
			XHR.open('GET', url, true);
			XHR.send();

			XHR.onreadystatechange = function(){
				if(XHR.readyState === 4 && XHR.status === 200){
					try {  
                        var res2 = JSON.parse(XHR.responseText);  
                        resolve(res2);  
                    } catch (e) {  
                        reject(e);  
                    }  
                }
		    }
	})
	
}
function renderRace(){
	return Promise.race([firstAjax(),secondAjax(res1)])
}
renderRace().then(function(value){
	console.log(value);
})
	