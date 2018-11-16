
    require({
            baseUrl: "./"
        },
        ["require", "one"],
        function(require, one) {

            define("two", function () {
                return {
                    name: "two"
                };
            });

            define("three", {
                name: "three"
            });

            setTimeout(function () {
                require(["four"], function (four) {
                    doh.register(
                        "nestedDefine",
                        [
                            function nestedDefine(t){
                                t.is("one", one.name);
                                t.is("four", four.name);
                                t.is("two", four.twoName);
                                t.is("three", four.threeName);
                            }
                        ]
                    );
                    doh.run();
                });
            }, 15);
        }
    );
    