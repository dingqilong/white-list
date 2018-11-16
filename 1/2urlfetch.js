
    require({
            baseUrl: "./",
            paths: {
                'one' : 'two',
                'two' : 'two',
                'three': 'three',
                'four': 'three'
            }
        },
        ["require", "one", "two", "three", "four"],
        function(require, one, two, three, four) {
            doh.register(
                "urlfetch", 
                [
                    function urlfetch(t){
                        //First confirm there is only one script tag for each
                        //module:
                        var scripts = document.getElementsByTagName("script"),
                            i, counts = {}, url, props, something;
                        for (var i = scripts.length - 1; i > -1; i--) {
                            url = scripts[i].href;
                            if (url) {
                                if (!(url in counts)) {
                                    counts[url] = 0;
                                }
                                counts[url] += 1;
                            }
                        }

                        //Now that we counted all the modules make sure count
                        //is always one.
                        for (prop in counts) {
                            t.is(1, counts[prop]);
                        }

                        t.is("one", one.name);
                        t.is("one", two.oneName);
                        t.is("two", two.name);
                        t.is("three", three.name);
                        t.is("three", four.threeName);
                        t.is("four", four.name);
                    }
                ]
            );
            doh.run();
        }
    );
    