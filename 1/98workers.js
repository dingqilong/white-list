
        //Start up a web worker and wait for a response from it.
        var worker = new Worker('workers.js'),
            d = new doh.Deferred(),
            count = 0;

        worker.onerror = function () {
            console.error("WORKER ERROR", arguments);
        };

        worker.onmessage = function(evt) {
            if (evt.data.debug) {
                console.log(evt.data.debug);
            } else {
                count += 1;
    
                if (count === 1) {
                    doh.is("blue", evt.data);
                } else if (count === 2) {
                    doh.is("green", evt.data);
                } else if (count === 3) {
                    doh.is("You called a function", evt.data);
                } else if (count === 4) {
                    doh.is("blue", evt.data);
                    d.callback(true);
                }
            }
        };

        doh.register(
            "webworkers",
            [
		{
		    name: "webworkers",
		    timeout: 5000,
		    runTest: function() {
                        return d;
                    }
                }
            ]
        );

        doh.run();
    