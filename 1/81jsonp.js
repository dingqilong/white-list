
    require({
            baseUrl: "./",
            paths: {
                require: "../../require"
            }
        },
        ["require", "lamp", "https://api.github.com/users/requirejs?callback=define"],
        function (require, lamp, user) {
            doh.register(
                "jsonp",
                [
                    function jsonp(t){
                        t.is("requirejs", user.data.login);
                        t.is('blue', lamp.color);
                    }
                ]
            );
            doh.run();
        }
    );
    