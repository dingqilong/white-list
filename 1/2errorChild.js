
        var master = new doh.Deferred(),
            failed;

        function done() {
            if (failed) {
                master.callback(true);
            }
        }
        define('a', ['missing'], function(m) {
            return {};
        });

        require(['a'], function (a) {
            failed = false;
        }, function (err) {
            failed = true;
        });

        setTimeout(done, 500);

        doh.register(
            "errorChild",
            [
                {
                    name: "errorChild",
                    timeout: 1000,
                    runTest: function () {
                        return master;
                    }
                }
            ]
        );
        doh.run();
    