
            require({
                    baseUrl: "./scripts/"
                },
                ["app"],
                function() {
                    doh.register(
                        "jqueryPlugins",
                        [
                            function jqueryPlugins(t){
                                t.is("alpha", $().alpha());
                                t.is("beta", $().beta());
                            }
                        ]
                    );
                    doh.run();
                }
            );
        