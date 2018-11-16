
    require.config({
        paths: {
            'one': 'one.js?some=thing'
        }
    });

    require(['one', 'two'], function (one, two) {
        doh.register(
            "queryPath",
            [
                function queryPath(t){
                    t.is('large', one.size);
                    t.is('small', two.size);

                    //Get all the script tags, make sure the one for
                    //'one' ends in 'one.js?some=thing' and the one
                    //for 'two' ends in 'two.js'
                    var i, tag, id, src,
                        tags = document.getElementsByTagName('script'),
                        found = 0;

                    for (i = tags.length - 1; i > -1; i--) {
                        tag = tags[i];
                        id = tag.getAttribute('data-requiremodule');
                        src = tag.src;
                        if (id === 'one') {
                            t.is(true, /one\.js\?some\=thing$/.test(src), 'no .js added');
                            found += 1;
                        } else if (id === 'two') {
                            t.is(true, /two\.js$/.test(src), 'has .js added');
                            found += 1;
                        }
                    }
                    t.is(2, found);
                }
            ]
        );

        doh.run();
    });

    