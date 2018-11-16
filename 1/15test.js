
            YUI().use('test', 'console', function (Y) {
                Y.use('*', function (Y) {
                    new Y.Console({
                        style: 'block',
                        width: '600px',
                        height: '600px',
                        entryTemplate:
                          '<div class="{entry_class} {cat_class} {src_class}">' +
                          '    <p class="{entry_meta_class}">' +
                          '        <span class="{entry_cat_class}">{category}</span>' +
                          '    </p>' +
                          '    <pre class="{entry_content_class}">{message}</pre>' +
                          '</div>',
                        newestOnTop: false,
                        consoleLimit: 500,
                        render: true
                    });

                    Y.Test.Runner.run();
                });
            });
        