
        Wind.Promise.create = function (fn) {
            var dfd = new $.Deferred();
            fn(dfd.resolve, dfd.reject);
            return dfd.promise();
        }
        
        var oneRoundTripAsync = eval(Wind.compile("promise", function () {
            $await($("#block").animate({ left: "200px" }, 1000).promise());
            $await($("#block").animate({ left: "0px" }, 1000).promise());
        }));
        
        var roundTripsAsync = eval(Wind.compile("promise", function (n) {
            for (var i = 0; i < n; i++) {
                $await(oneRoundTripAsync());
            }
        }));
    