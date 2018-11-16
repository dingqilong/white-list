
    require({
            baseUrl: "./"
        },
        ["adder"],
        function(adder) {
            doh.register(
                "moduleExports",
                [
                    function moduleExports(t){
                        t.is("adder", adder.name);
                        t.is(true, adder.isEqual);
                    }
                ]
            );
            doh.run();
        }
    );
    