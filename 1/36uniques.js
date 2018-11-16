
    require({
            baseUrl: "./"
        },
        ["require", "one", "two", "three"],
        function(require, one, two, three) {
            doh.register(
                "uniques",
                [
                    function uniques(t){
                        t.is("one", one.name);
                        t.is("three", one.threeName);
                        t.is("three", one.threeName2);
                        t.is("one", two.oneName);
                        t.is("one", two.oneName2);
                        t.is("two", two.name);
                        t.is("three", two.threeName);
                        t.is("three", three.name);
                    }
                ]
            );
            doh.run();
        }
    );
    