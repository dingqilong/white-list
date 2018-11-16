
        var master = new doh.Deferred();

        doh.register(
            "undefNoRequire",
            [
                {
                    name: "undefNoRequire",
                    timeout: 2000,
                    runTest: function () {
                        return master;
                    }
                }
            ]
        );
        doh.run();

        //Start with a bad definition we want to overwrite
        define('abc', function() {
            master.errback(false);
        });

        define('b', {});

        //Should remove that waiting 'abc' definition
        requirejs.undef('abc');

        //Now set the final version.
        define('abc', function() {
            master.callback(true);
        });

        //And now fully execute the module.
        require(['abc'], function() {});

    