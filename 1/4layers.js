
    var master = new doh.Deferred();
    doh.register(
        "layers",
        [
            {
                name: "layers",
                timeout: 5000,
                runTest: function() {
                    return master;
                }
            }
        ]
    );
    doh.run();

    require(
        {
            baseUrl: "./"
        },
        ["require", "layer1"],
        function(require) {
            require(["alpha", "beta", "gamma", "epsilon"],
                function(alpha, beta, gamma, epsilon) {
                    doh.is("alpha", alpha.name);
                    doh.is("beta", alpha.betaName);
                    doh.is("beta", beta.name);
                    doh.is("gamma", beta.gammaName);
                    doh.is("gamma", gamma.name);
                    doh.is("epsilon", gamma.epsilonName);
                    doh.is("epsilon", epsilon.name);

                    var regExp = /alpha|beta|gamma/,
                        i,
                        scripts = document.getElementsByTagName("script");
                    for (var i = scripts.length - 1; i > -1; i--) {
                        doh.f(regExp.test(scripts[i].src));
                    }
                    master.callback(true);
                }
            );
        }
    );
    