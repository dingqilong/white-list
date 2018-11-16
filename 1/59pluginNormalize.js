

        define("Plugin", function() {
            return {
                load: function(name, parentRequire, onload, config) {
                    onload(name);
                },
                normalize: function(name, normalize) {
                    return name + '.xyz';
                }
            }
        });

		require({
		        baseUrl: "./"
		    },
		    ["Plugin!hello", "Plugin!world"],
		    function(hello, world) {
		        doh.register(
		            "pluginNormalize",
		            [
		                function pluginNormalize(t){
		                    t.is("hello.xyz", hello);
		                    t.is("world.xyz", world);
		                }
		            ]
		        );

		        doh.run();
		    }
		);


    