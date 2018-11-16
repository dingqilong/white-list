
    require({
        baseUrl: "./",
        paths: {
            text: "../../../text/text"
        } //, priority: ['widgetlayer']
    });
    require(
        ["require", "widget", "local", "text!resources/sample.html!strip"],
        function(require, widget, local, sampleText) {
            doh.register(
                "text",
                [
                    function text(t){
                        t.is("<span>Hello World!</span>", sampleText);
                        t.is('<div data-type="widget"><h1>This is a widget!</h1><p>I am in a widget</p></div>', widget.template);
                        t.is('subwidget', widget.subWidgetName);
                        t.is('<div data-type="subwidget"><h1>This is a subwidget</h1></div>', widget.subWidgetTemplate);
                        t.is('<span>This! is template2</span>', widget.subWidgetTemplate2);
                        t.is('<h1>Local</h1>', local.localHtml);
                    },

                    function textLocalXhr(t){
                        var text = require('text');
                        t.is(true, text.useXhr('./some/thing.html', 'http', 'some.domain.com'));
                        t.is(false, text.useXhr('https://some.domain.com/some/thing.html', 'http', 'some.domain.com'));
                        t.is(false, text.useXhr('http://domain.com/some/thing.html', 'http', 'some.domain.com'));
                        t.is(true, text.useXhr('//some.domain.com/some/thing.html', 'http', 'some.domain.com'));
                        t.is(true, text.useXhr('https://some.domain.com:444/some/thing.html', 'https', 'some.domain.com', '444'));
                        t.is(false, text.useXhr('https://some.domain.com/some/thing.html', 'https', 'some.domain.com', '444'));
                        t.is(true, text.useXhr('http://localhost/some/thing.html', 'http', 'localhost'));
                        t.is(true, text.useXhr('http://localhost:80/some/thing.html', 'http', 'localhost'));
                        t.is(true, text.useXhr('http://localhost/some/thing.html', 'http', 'localhost', '80'));
                        t.is(true, text.useXhr('https://localhost:443/some/thing.html', 'https', 'localhost'));
                        t.is(true, text.useXhr('https://localhost/some/thing.html', 'https', 'localhost', '443'));
                    }
                ]
            );
            doh.run();

        }
    );
    