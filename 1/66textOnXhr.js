
    var fired = false;

    require({
        baseUrl: "./",
        paths: {
            text: "../../../text/text"
        },
        config: {
            text: {
                onXhr: function (xhr, url) {
                    doh.is(true, !!xhr);
                    doh.is(true, url.indexOf('plain.txt') !== -1);
                    fired = true;
                    if (/\.txt$/.test(url) && xhr.overrideMimeType) {
                        xhr.overrideMimeType('text/plain; charset=utf8');
                    }
                }
            }
        }
    });

    require(
        ["text!plain.txt"],
        function(plainText) {
            doh.register(
                "textonXhr",
                [
                    function textOnXhr(t){
                        t.is(true, plainText.indexOf('hello world') === 0);
                        t.is(true, fired);
                    }
                ]
            );
            doh.run();

        }
    );
    