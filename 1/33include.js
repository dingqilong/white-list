
        var x = eval(Wind.compile("async", function() {
            debugger;
            $await(Wind.Async.include("./my.js"));
            console.log("b");
        }));
        x().start();

    