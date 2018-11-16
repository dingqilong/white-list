
        var master = new doh.Deferred(),
            failed = false;

        function done() {
            if (!failed) {
                master.callback(true);
            }
        }
        define('a', {name: 'a'});

        require(['a'], function (a) {
            a.whatever.fail = 'fail';
        }, function (err) {
            failed = true;
        });

        setTimeout(done, 500);

        doh.register(
            "errorRequireErrback",
            [
                {
                    name: "errorRequireErrback",
                    timeout: 1000,
                    runTest: function () {
                        return master;
                    }
                }
            ]
        );
        doh.run();
    