
        //Allow locale to be set via query args.
        var locale = null;
        var query = location.href.split("#")[0].split("?")[1];
        var match = query && query.match(/locale=([\w-]+)/);
        if (match) {
            locale = match[1];
        }

        //Allow bundle name to be loaded via query args.
        var bundle = "i18n!nls/colors";
        match = query && query.match(/bundle=([^\&]+)/);
        if (match) {
            bundle = match[1];
        }

        var expected = {
            red: "red",
            blue: "blue",
            green: "green",
            black: {
                opacity: 1,
                rgb: {
                    r: "0",
                    g: "0",
                    b: "0"
                }
            }
        };

        var opacity = 1;
        if (locale && locale.indexOf("en-us-surfer") != -1 || bundle.indexOf("nls/en-us-surfer/colors") != -1) {
            expected.red = "red, dude";
            expected.black.opacity = 0.5;
        } else if ((locale && locale.indexOf("fr-") != -1) || bundle.indexOf("fr-") != -1) {
            expected.red = "rouge";
            expected.blue = "bleu";
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
        [bundle],
        function(actual) {
            doh.register(
                "i18n",
                [
                    {
                        name: "simple structure",
                        runTest: function (t) {
                            t.is(expected.red, actual.red);
                            t.is(expected.blue, actual.blue);
                            t.is(expected.green, actual.green);
                        }
                    },
                    {
                        name: "complex structure",
                        runTest: function (t) {
                            t.is(expected.black, actual.black);
                        }
                    }
                ]
            );
            doh.run();
        });
    