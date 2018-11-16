
        function done() {
            doh.register(
                        "config",
                        [
                            function config(t){
                                t.is("blue", s.color);
                                t.is("dimple-blue", d.color);
                                t.is("You called a function", f());
                            }
                        ]
                    );
            doh.run();
        }

        var s, d, f,
            require = {
                baseUrl: "./",
                paths: {
                    domReady: '../../domReady/domReady'
                },
                deps: ["require", "simple", "dimple", "func", "domReady!"],
                callback: function (require, simple, dimple, func, doc) {
                    s = simple;
                    d = dimple;
                    f = func;
                    done();
                }
            };
    