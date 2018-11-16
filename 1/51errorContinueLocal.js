
        var doneCount = 0;
        var master = new doh.Deferred();
        function done() {
            master.callback(true);
        }

        requirejs({
            waitSeconds: 2,
            enforceDefine: true
        }, ['a', 'b', 'broken'], function (a, b, broken) {
            doh.is("not-a", a.name);
            done();
        }, function (err) {
            if (err.requireModules) {
                var id = err.requireModules[0],
                    config = {paths: {}};

                setTimeout(function () {
                    requirejs(['c', 'd'], function (c, d) {
                        doh.is('c', c.name);
                        doh.is('a', c.a.name);
                        doh.is('d', d.name);
                        doh.is('b', d.b.name);
                        done();
                    });
                }, 100);
            }
        });

        doh.register(
            "errorContinueLocal",
            [
                {
                    name: "errorContinueLocal",
                    timeout: 5000,
                    runTest: function () {
                        return master;
                    }
                }
            ]
        );
        doh.run();
    