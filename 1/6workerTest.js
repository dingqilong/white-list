
    var worker=new Worker("workerTest.js");
	worker.onmessage=function(event){
	   console.log(event.data);
	};
	worker.postMessage("lizhiguo");
 