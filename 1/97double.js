
    var master = new doh.Deferred(),
        count = 0;

    function done() {
        count += 1;
        if (count === 2) {
            master.callback(true);
        }
    }

    doh.register(
        "doublePluginCall",
        [
            {
                name: "doublePluginCall",
                timeout: 5000,
                runTest: function() {
                    return master;
                }
            }
        ]
    );
    doh.run();

    require(['double!foo'], function (foo) {
        if (foo === 'x') {
            done();
        }
    });

    require(['double!foo'], function (foo) {
        if (foo === 'x') {
            done();
        }
    });

    