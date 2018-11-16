
        window.onload = function () {

            var logo = Snap.select("#snap-logo"),
                parts = [
                    ["top", [0, 20]], 
                    ["left", [20, 0]], 
                    ["bottom", [0, -20]],
                    ["right", [-20, 0]]
                ],
                i = 0,
                showTimer = null,
                hideTimer = null;

            for (i = 0; i < parts.length; i++) {
                var el = parts[i],
                element = logo.select("#" + el[0]);
                element.attr({
                    opacity: 0,
                    transform: "t" + el[1]
                });
                parts[i].push(element);
            }

            i = 0;

            function showEach() {
                clearTimeout(hideTimer);
                if (i >= parts.length) return;
                parts[i][2].animate({ 
                    transform: "t0,0",
                    opacity: 1
                }, 200, mina.easeout);
                showTimer = setTimeout(showEach, 200);
                i++;
                if (i >= parts.length) i = parts.length-1;
            }

            function hideEach() {
                clearTimeout(showTimer);
                if (i < 0) return;
                parts[i][2].animate({ 
                    transform: "t" + parts[i][1],
                    opacity: 0
                }, 200, mina.easeout);
                hideTimer = setTimeout(hideEach, 200);
                i--;
                if (i < 0) i = 0;
            }

            setTimeout(function () {
                logo.attr({
                    display: "inline"
                });
                showEach();
            }, 100);

            logo.hover(hideEach, showEach);

        };
        