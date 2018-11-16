

    var blob = new Blob(["define({name: 'a'});"],
                        {type : 'application/javascript'});

    var url = URL.createObjectURL(blob);

console.log(url);

    require.config({
        baseUrl: 'js',
        urlArgs: 'v=1234',
        paths: {
            a: url
        }
    });

    require(['a'], function(a) {
        doh.register(
            'urlArgsBlob',
            [
                function urlArgsBlob(t){
                    t.is(url, require.toUrl('a'));
                    t.is('a', a.name);
                }
            ]
        );
        doh.run();
    });
