
    require.config({
        baseUrl: 'js',
        urlArgs: function(id, url) {
            var args = 'v=1';
            if (url.indexOf('view.html') !== -1) {
                args = 'v=2'
            }

            return (url.indexOf('?') === -1 ? '?' : '&') + args;
        }
    });

    doh.register(
        'urlArgsToUrlFunction',
        [
            function urlArgsToUrlFunction(t){
                t.is('js/view.html?v=2', require.toUrl('view.html'));
                t.is('js/view?v=1', require.toUrl('view'));
            }
        ]
    );
    doh.run();
