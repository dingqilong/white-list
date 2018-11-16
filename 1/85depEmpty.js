
    var noneOk = false,
        emptyOk = false;

    define('none', function (require, exports, module) {
        noneOk = arguments.length === 3;
    });

    define('empty', [], function () {
        emptyOk = arguments.length === 0;
    });

    require(['none', 'empty'], function (none, empty) {
        doh.register(
            "depEmpty",
            [
                function depEmpty(t){
                    t.is(true, noneOk, 'none has three args');
                    t.is(true, emptyOk, 'empty has no args');
                }
            ]
        );
        doh.run();
    });
    