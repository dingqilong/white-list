
    require({
        baseUrl: "./",
        paths: {
            text: "../../../text/text"
        }
    });

    var master = new doh.Deferred();
    doh.register(
        "textOnError",
        [
            {
                name: "textOnError",
                timeout: 2000,
                runTest: function () {
                    return master;
                }
            }
        ]
    );
    doh.run();

    require(
        ["text!doesnotexist.html"],
        function(doesNotExist) {
            doh.is(false, true, "This should not fire");
            master.callback(false);

        }, function (err) {
            doh.is(404, err.xhr.status);
            master.callback(true);
        }
    );
    