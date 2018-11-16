
    var globalCounter = 0,
        scriptCounter = 0;
    require({
            baseUrl: "./",
            packages: [
                {
                    name:"first",
                    location:"first.js",
                    main:"./first"
                }
            ]
        },
        ["require", "first!whatever"],
        function(require, first) {
            doh.register(
                "paths",
                [
                    function paths(t){
                        //First confirm there is only one script tag for each
                        //module:
                        var scripts = document.getElementsByTagName("script"),
                            i, counts = {}, modName, props, something;
                        for (var i = scripts.length - 1; i > -1; i--) {
                            modName = scripts[i].getAttribute("data-requiremodule");
                            if (modName && modName === "first" || modName === "first/first") {
                                scriptCounter += 1;
                            }
                        }

                        t.is(1, scriptCounter);
                        t.is(2, globalCounter);
                        t.is("first", first.name);
                        t.is("second", first.secondName);
                    }
                ]
            );
            doh.run();
        }
    );
    