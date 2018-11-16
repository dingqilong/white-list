
    var worker=new Worker("workerJson.js");
	worker.onmessage=function(event){
	   console.log(event.data);
	   var jsonData=event.data;
	   //evaluateData(jsonData);
	};
	worker.postMessage({"name":"lizhiguo","type":"student"});
 