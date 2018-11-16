
            var master = new doh.Deferred(),
                masterCount = 0;

            function readyFired() {
                masterCount += 1;
                if (masterCount === 3) {
                    master.callback(true);
                }
            }

            doh.register(
                "jqueryDynamic",
                [
                    {
                        name: "jqueryDynamic",
                        timeout: 3000,
                        runTest: function() {
                            return master;
                        }
                    }
                ]
            );
            doh.run();
            require({
                "baseUrl": "./scripts/",
                "paths": {
                    "jquery": "jquery-1.7.1"
                }
            });
            require(["jquery", "dynamicApp"]);
        