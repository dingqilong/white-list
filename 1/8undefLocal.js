
        var doneCount = 0;
        var master = new doh.Deferred();
        function done() {
            master.callback(true);
        }

        requirejs({
            waitSeconds: 2,
            enforceDefine: true
        }, ['dep'], function (dep) {
            doh.is("real", dep.name);
            done();
        }, function (err) {
            var id = err.requireModules[0],
                config = {paths: {}};

            if (id !== 'dep') {
                throw new Error('onError was expecting "dep" but got: ' + id);
            }

            requirejs.undef(id);
            config.paths[id] = 'real';

            requirejs.config(config);

            requirejs(['dep'], function () {});
        });

        doh.register(
            "undef",
            [
                {
                    name: "undef",
                    timeout: 5000,
                    runTest: function () {
                        return master;
                    }
                }
            ]
        );
        doh.run();
    