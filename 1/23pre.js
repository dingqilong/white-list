
        dojo.registerModulePath("dojo", "https://ajax.googleapis.com/ajax/libs/dojo/1.4.4/dojo");
        dojo.registerModulePath("dojox", "https://ajax.googleapis.com/ajax/libs/dojo/1.4.4/dojox");
        dojo.require("dojox.highlight");
        dojo.require("dojox.highlight.languages.javascript");
        dojo.require("dojox.highlight.languages.html");
        dojo.ready(function() {
            dojo.query("pre > code")
                .forEach(function(node) {
                    if (node.innerHTML.indexOf("DOCTYPE") !== -1 || node.innerHTML.indexOf('&lt;script') !== -1) {
                        dojo.addClass(node, "html");
                    } else {
                        dojo.addClass(node, "javascript");
                    }
                })
                .forEach(dojox.highlight.init);
        });
    