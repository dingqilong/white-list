
        var master = new doh.Deferred(),
            threwError = false;

        requirejs.onError = function (err) {
            threwError = true;
            throw err;
        };

        requirejs({
            waitSeconds: 2,
            enforceDefine: true,
            paths: {
                'dep': [
                    'fake1',
                    'fake2',
                    'real'
                ]
            }
        }, ['dep'], function (dep) {
            doh.is("real", dep.name);
            doh.is(false, threwError);
            master.callback(true);
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
    