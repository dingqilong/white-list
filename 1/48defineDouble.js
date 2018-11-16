
        var aCount = 0,
            bCount = 0;

        define('a', function () {
            aCount += 1;
        });
        define('a', function () {
            aCount += 1;
        });

        define('b', function() {
            bCount += 1;
        });

        require(['b'], function() {

            define('b', function() {
                bCount += 1;
            });

            require(['a', 'b'], function () {
                doh.register(
                    'defineDouble',
                    [
                        function defineDouble(t){
                            t.is(1, aCount);
                            t.is(1, bCount);
                        }
                    ]
                );
                doh.run();
            });
        });
    