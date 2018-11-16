
	function sendAjax(){
		return new Promise(function(resolve, reject){
			const url = 'json_example.php';
			let result = null;
			const XHR = new XMLHttpRequest();
			XHR.open('GET', url, true);
			XHR.send();

			XHR.onreadystatechange = function(){
				if(XHR.readyState === 4 && XHR.status === 200){
					try {  
                        var res = JSON.parse(XHR.responseText);  
                        resolve(res);  
                    } catch (e) {  
                        reject(e);  
                    }  
                }
		    }
		})	
}
sendAjax()
    .then(function(response){
    	//动作1
    	response.color.push("blue");
    	console.log(response);
    	return response;
    })
    .then(function(response){
    	//动作2
    	response.relative.push("daughter");
    	console.log(response);
    	return response;
    })
    .then(function(response){
    	//动作3
    	response.salary.push("9k");
    	console.log(response);
    	return response;
    })
	