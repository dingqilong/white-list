
        var doneCount = 0;
        var master = new doh.Deferred();
        function done() {
            doneCount += 1;
            if (doneCount == 2) {
                master.callback(true);
            }
        }

        requirejs({
            waitSeconds: 2
        }, ['b', 'defineError'], function (b, defineError) {
            doh.is("shouldNotBeReached", b.name);
            done();
        }, function (err) {

            if (err.requireType === 'define') {
                requirejs(['c', 'd'], function (c, d) {
                    doh.is('c', c.name);
                    doh.is('a', c.a.name);
                    doh.is('d', d.name);
                    doh.is('b', d.b.name);

                    setTimeout(function () {
                        //Ask for the broken thing again, should get error
                        //handler still called.
                        requirejs(['defineError'], function (de) {
                            doh.is("shouldNotBeReached", de.name);
                            done();
                        }, function (err) {
                            doh.is("define", err.requireType);
                            done();
                        });
                    }, 10);
                    done();
                });
            }
        });

        doh.register(
            "defineErrorLocal",
            [
                {
                    name: "defineErrorLocal",
                    timeout: 5000,
                    runTest: function () {
                        return master;
                    }
                }
            ]
        );
        doh.run();
    