
    require({
            baseUrl: "./",
            paths: {
                text: "../../../text/text"
            }
        },
        ["text!resources/sample.html!strip"],
        function(sampleText) {
            doh.register(
                "textOnly",
                [
                    function textOnly(t){
                        t.is("<span>Hello World!</span>", sampleText);
                    }
                ]
            );
            doh.run();
        }
    );
    