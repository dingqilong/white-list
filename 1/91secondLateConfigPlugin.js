
    require.config({
        baseUrl: "",
        paths: {
            "wrap": "app/lib_/amd/nonamd",
            "text": "app/lib_/amd/text",
        "plugin1": "plugin1_ko"
        },
        map: {
           "*": {
           // Hide the wrapping by using a map.
               "app/lib/jquery":     "wrap!app/lib_/jquery",
           "app/lib/jquery.foo": "wrap!app/lib_/jquery.foo"
           }
        },
        config: {
            // "wrap" amd plugin options
            wrap: {
                shim: {
                    // How to wrap the ~jquery~ module
                    "app/lib_/jquery": {
                        postscript: "return $.noConflict(true);"
                    },

            // How to wrap the ~jquery.foo~ module
                    "app/lib_/jquery.foo": {
                        deps: {
                            // Module "jquery" goes to parameter "jQuery"
                            "app/lib/jquery": "jQuery"
                        },
                        exports: "jQuery"
                    }
                }
            }
        }
    });

    require(["app/lib/jquery.foo", "plugin1/A"], function(jq, a) {
      doh.register(
          "secondLateConfigPlugin",
          [
              function secondLateConfigPlugin(t) {
                  t.is("A loaded!", a);
                  t.is("jQuery FOO here!", jq.foo);
              }
          ]
      );
      doh.run();
    });
    