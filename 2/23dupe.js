
        require(['func'], function(func) {
            doh.register(
                'circularDupe',
                [
                    function circularDupe(t){
                        t.is('hello world suffix', func('world'));
                    }
                ]
            );
            doh.run();
        });
    