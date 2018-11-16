
        var x = eval(Wind.compile("async", function() {
            var worker = new Worker("worker.js");

            while(true) {
                worker.postMessage(1);
                var e = $await(Wind.Async.onEvent(worker, "message"));
                console.log(e.data);
            }
            console.log("b");
        }));
        x().start();
       
   
   
  