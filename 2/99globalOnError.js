
        var master = new doh.Deferred(),
            failed = false;

        requirejs.onError = function (err) {
            if (!failed) {
                master.callback(true);
            }
        };

        define('a', {name: 'a'});

        require(['a'], function (a) {
            a.whatever.fail = 'fail';
        }, function (err) {
            failed = true;
        });

        doh.register(
            "globalOnError",
            [
                {
                    name: "globalOnError",
                    timeout: 1000,
                    runTest: function () {
                        return master;
                    }
                }
            ]
        );
        doh.run();
    