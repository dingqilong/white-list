
        NAMESPACE.require(['one', 'dimple'], function(one, dimple) {
            doh.register(
                        "namespaceTest",
                        [
                            function namespaceTest(t){
                                t.is("large", one.size);
                                t.is("dimple-blue", dimple.color);
                            }
                        ]
                    );
            doh.run();

        });
    