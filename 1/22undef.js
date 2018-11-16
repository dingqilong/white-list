
        var doneCount = 0;
        var master = new doh.Deferred();
        function done() {
            doneCount += 1;
            //alert("done");
            if (doneCount == 2) {
                //alert("master callback");
                master.callback(true);
            }
        }

        requirejs.onError = function (err) {
            var id = err.requireModules[0],
                config = {paths: {}};

            requirejs.undef(id);
            config.paths[id] = 'real';

            requirejs.config(config);

            requirejs(['dep'], function (dep) {
                doh.is("real", dep.name);
                done();
            });
            return;

            throw err;
        };

        requirejs({
            waitSeconds: 2,
            enforceDefine: true
        }, ['dep'], function (dep) {
            doh.is("real", dep.name);
            done();
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
    