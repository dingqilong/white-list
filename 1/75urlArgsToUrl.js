
    require.config({
        baseUrl: 'js',
        urlArgs: 'v=1234'
    });

    doh.register(
        'urlArgsToUrl',
        [
            function urlArgsToUrl(t){
                t.is('js/view.html?v=1234', require.toUrl('view.html'));
                t.is('js/view?v=1234', require.toUrl('view'));
            }
        ]
    );
    doh.run();
