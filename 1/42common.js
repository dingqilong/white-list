
        //Allow locale to be set via query args.
        var locale = null;
        var query = location.href.split("#")[0].split("?")[1];
        var match = query && query.match(/locale=([\w-]+)/);
        if (match) {
            locale = match[1];
        }

        var red = "red";
        var blue = "blue";
        if (locale && locale.indexOf("en-us-surfer") != -1) {
            red = "red, dude";
        } else if ((locale && locale.indexOf("fr-") != -1)) {
            red = "rouge";
            blue = "bleu";
        }
        require({
            config: {
                'i18n': {
                    locale: locale
                }
            },
            baseUrl: "./",
            paths: {
                i18n: "../../../i18n/i18n"
            }
        },
        ["commonA", "commonB"],
        function(commonA, commonB) {
            doh.register(
                "commoni18n",
                [
                    function commoni18n(t) {
                        t.is(red, commonA);
                        t.is(blue, commonB);
                    }
                ]
            );
            doh.run();
        });
    