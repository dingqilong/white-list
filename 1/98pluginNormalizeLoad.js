
		require({
		        baseUrl: "./"
		    },
		    ["Plugin!hello", "Plugin!world"],
		    function(hello, world) {
		        doh.register(
		            "pluginNormalizeLoad",
		            [
		                function pluginNormalizeLoad(t){
		                    t.is("hello.xyz", hello);
		                    t.is("world.xyz", world);
		                }
		            ]
		        );

		        doh.run();
		    }
		);


    