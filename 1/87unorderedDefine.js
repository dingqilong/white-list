
    var hasBadLoad = false;
    var oldLoad = requirejs.load;

    requirejs.load = function(context, id, url) {
        if (id === 'foo') {
            hasBadLoad = true;
        }
        return oldLoad.call(requirejs, context, id, url);
    };

    require(['app'], function(app) {
        doh.register(
            "unorderedDefine",
            [
                function unorderedDefine(t){
                    t.is('app', app.name);
                    t.is('bar', app.bar.name);
                    t.is(false, hasBadLoad, 'has a bad load for foo');
                }
            ]
        );

        doh.run();

    });
    