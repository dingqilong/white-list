


require(['../b/1'], function(b1) {
    doh.register(
        "relativeOutsideBaseUrl",
        [
            function relativeOutsideBaseUrl(t){
                t.is("b1", b1.name);
                t.is("two", b1.two.name);
                t.is("b3", b1.two.b3.name);
            }
        ]
    );

    doh.run();
});

    