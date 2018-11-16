
        var doneCount = 0;
        var master = new doh.Deferred();
        function done() {
            master.callback(true);
        }

        requirejs.onError = function (err) {

            if (err.requireModules && err.plugMessage === 'broken') {
                var id = err.requireModules[0],
                    config = {paths: {}};

                setTimeout(function () {
                    requirejs(['c', 'd', 'plug!nested'], function (c, d, nested) {
                        doh.is('c', c.name);
                        doh.is('a', c.a.name);
                        doh.is('d', d.name);
                        doh.is('b', d.b.name);
                        doh.is('nested', nested);
                        done();
                    });
                }, 100);

                return;
            }

            throw err;
        };

        requirejs({
            waitSeconds: 2
        }, ['a', 'b', 'plug!broken'], function (a, b, broken) {
            doh.is("not-a", a.name);
            done();
        });

        doh.register(
            "pluginErrorContinue",
            [
                {
                    name: "pluginErrorContinue",
                    timeout: 5000,
                    runTest: function () {
                        return master;
                    }
                }
            ]
        );
        doh.run();
    