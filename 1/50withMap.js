
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
                    'real'
                ]
            },
            map: {
                '*': {
                    'dep': 'dep-private'
                },
                'dep-private': {
                    'dep': 'dep'
                }
            }
        }, ['dep'], function (dep) {
            doh.is("real", dep.name);
            doh.is(false, threwError);
            master.callback(true);
        });

        doh.register(
            "pathArrayWithMap",
            [
                {
                    name: "pathArrayWithMap",
                    timeout: 10000,
                    runTest: function () {
                        return master;
                    }
                }
            ]
        );
        doh.run();
    