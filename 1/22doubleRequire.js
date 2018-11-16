
        var doneCount = 0;
        var master = new doh.Deferred();
        function done() {
            doneCount += 1;
            if (doneCount === 2) {
                master.callback(true);
            }
        }

        require.config({
            waitSeconds: 2,
            shim:{
                myShim: {
                    deps: ['broken'],
                    exports: 'myShim'
                }
            }
        });

        require(['b'], function (b) {
            throw new Error('Should not reach here 1');
        }, function (err) {
            console.log(err);
            done();
            setTimeout(function () {
                requirejs(['c'], function (c) {
                    throw new Error('Should not reach here 2');
                }, function (err) {
                    console.log(err);
                    done();
                });
            }, 100);
        });

        doh.register(
            "errorDoubleRequire",
            [
                {
                    name: "errorDoubleRequire",
                    timeout: 7000,
                    runTest: function () {
                        return master;
                    }
                }
            ]
        );
        doh.run();
    