
        var master = new doh.Deferred(),
            threwError = false,
            counter = 0;

        function done() {
            counter += 1;
            doh.is(1, counter, "done should only be called once");

            if (counter === 1) {
                //Set a timeout that expires after waitSeconds to be sure
                //we are not called with a timeout error when enforceDefine
                //is in play.
                setTimeout(function () {
                    master.callback(true);
                }, 4500);
            }
        }

        requirejs.onError = function (err) {
            //console.log('onError: ' + err.requireModules[0] + ', type: ' + err.requireType);
            doh.is(true, err.requireType !== 'timeout', 'no timeout error');
            doh.is('dep', err.requireModules[0]);
            done();
        };

        requirejs({
            waitSeconds: 2,
            enforceDefine: true,
            paths: {
                'dep': [
                    'fake1',
                    'fake2'
                ]
            }
        }, ['dep'], function (dep) {
            doh.is("real", "shouldNotExist");
            done();
        });

        doh.register(
            "pathArray",
            [
                {
                    name: "pathArray",
                    timeout: 10000,
                    runTest: function () {
                        return master;
                    }
                }
            ]
        );
        doh.run();
    