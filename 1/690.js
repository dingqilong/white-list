
    (function () {
        "use strict";

        var deferredAnimate = Q.async(function* (element) {
            for (var i = 0; i < 100; ++i) {
                element.style.marginLeft = i + "px";
                yield Q.delay(20);
            }
        });

        Q.spawn(function* () {
            yield deferredAnimate(document.getElementById("box"));
            alert("Done!");
        });
    }());
    