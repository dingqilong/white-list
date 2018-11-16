
        define('sparkle/main', ['module'], function (module) {
            return {
                size: module.config().size
            };
        });

        define('sparkle', ['sparkle/main'], function (main) {
            return main;
        })

        require.config({
            config: {
                'sparkle/main': {
                    size: 'large'
                },
                'pixie/index': {
                    apiKey: 'maple'
                }
            },

            packages: [
                'sparkle',
                {
                    name: 'pixie',
                    main: './index.js'
                }
            ]
        });

        require(['sparkle', 'pixie'], function (sparkle, pixie) {
            doh.register(
                "packagesConfig",
                [
                    function packagesConfig(t){
                        t.is('large', sparkle.size);
                        t.is('maple', pixie.apiKey);
                    }
                ]
            );
            doh.run();
        });

    