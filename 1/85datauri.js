
    requirejs.config({
        paths: {
            'foo': 'data:text/javascript,define([], function() { return { name: "foo" }})'
        }
    });
    require(['foo'], function(foo) {
        doh.register(
            "datauri",
            [
                function datauri(t){
                    t.is('foo', foo.name);
                }
            ]
        );

        doh.run();
    });
    