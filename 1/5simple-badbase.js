
        require({
                baseUrl: "http://127.0.0.1/requirejs/requirejs/tests/"
            },
            ["require", "simple", "dimple", "func"],
            function(require, simple, dimple, func) {
                doh.register(
                    "simple",
                    [
                        function colors(t){
                            t.is("blue", simple.color);
                            t.is("dimple-blue", dimple.color);
                            t.is("You called a function", func());
                        }
                    ]
                );
                doh.run();
            }
        );
    