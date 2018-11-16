
	var doneCount = 0;
	var master = new doh.Deferred();
	function done() {
	    doneCount += 1;
	    //alert("done");
	    if (doneCount == 2) {
		//alert("master callback");
		master.callback(true);
	    }
	}
	doh.register(
	    "multiversion",
	    [
		{
		    name: "multiversion",
		    timeout: 5000,
		    runTest: function() {
			require(
			    {
				context: "version1",
				baseUrl: "version1/"
			    },
			    ["require", "alpha", "beta", "version1/gamma.js"],
			    function(require, alpha, beta) {
				//Notice no module arg name for gamma in the function call.
				//gamma in the log call below will be a global created by gamma.js.
				doh.is("green", gamma.color);
				doh.is(1, alpha.version);
				doh.is(1, beta.version);

				setTimeout(function(){
				    require(
					["omega"],
					function(omega) {
					    doh.is(1, omega.version);
					    doh.is("1", alpha.version);
					    done();
					}
				    );
				}, 100);
			    }
			);

			require.config(
			    {
				context: "version2",
				baseUrl: "version2/"
			    })(
			    ["require", "alpha", "beta", "version2/epsilon.js"],
			    function(require, alpha, beta) {
				//Notice no module arg name for epsilon in the function call.
				//epsilon in the log call below will be a global created by epsilon.js.
				doh.is("red", epsilon.color);
				doh.is(2, alpha.version);
				doh.is(2, beta.version);

				setTimeout(function(){
				    require(
					["omega"],
					function(omega) {
					    doh.is(2, omega.version);
					    doh.is("2", alpha.version);
					    done();
					}
				    );
				}, 100);
			    });

			return master;
		    }
		}
	    ]
	);
	doh.run();
    