
        var S;
        window.onload = function () {
            var s = Snap(850, 35);
            function chooser(s, count) {
                var loop = "M35,65a30,30,0,0,0,0-60a30,30,0,0,0,0,60",
                    line = "M35,65a30,30,0,0,0,0-60a30,30,0,0,0,0,60c30,0,60-60,90-60a30,30,0,0,1,0,60a30,30,0,0,1,0-60",
                    l1 = Snap.path.getTotalLength(loop),
                    l2 = Snap.path.getTotalLength(line),
                    cur = 1,
                    p = s.path({
                        path: loop,
                        fill: "none",
                        stroke: "#f00",
                        strokeWidth: 6,
                        strokeLinecap: "round"
                    });
                for (var i = 1; i <= count; i++) {
                    s.text(90 * i - 55, 49, i).attr({
                        font: "45px source-sans-pro, Source Sans Pro, Helvetica, sans-serif",
                        textAnchor: "middle"
                    });
                    (function (i) {
                        s.circle(90 * i - 55, 35, 40).attr({
                            opacity: 0
                        }).click(eve.f("tut.click", i - 1));
                    }(i));
                }
                s.path("M11.166,23.963L22.359,17.5c1.43-0.824,1.43-2.175,0-3L11.166,8.037c-1.429-0.826-2.598-0.15-2.598,1.5v12.926C8.568,24.113,9.737,24.789,11.166,23.963z").transform("t" + (90 * (count + 1) - 68) + ",18s2");
                var but = s.circle(90 * (count + 1) - 55, 35, 30).attr({
                    fillOpacity: 0,
                    stroke: "#333",
                    strokeWidth: 2
                });
                eve.on("tut.click", function (I) {
                    p.attr({
                        path: loop,
                        transform: "t" + (90 * I) + ",0"
                    });
                    cur = I + 1;
                });
                function frameHandler(frame) {
                    function anim() {
                        cur++;
                        if (cur > count) {
                            return;
                        }
                        if (typeof frame == "function") {
                            frame(cur);
                        }
                        Snap.animate(0, l2 - l1, function (val) {
                            p.attr({
                                path: Snap.path.getSubpath(line, val, val + l1)
                            });
                        }, 500, function () {
                            p.attr({
                                path: loop,
                                transform: p.transform() + "t90,0"
                            });
                        });
                    }
                    if (typeof frame == "function") {
                        but.click(anim);
                    } else {
                        anim();
                    }
                }
                return frameHandler;
            }
            var g = s.g();
            g.attr({
                transform: "s.5,.5,0,0"
            });
            var str = "",
                code = document.getElementById("code");
            var domcodelines = document.querySelectorAll("#codelines li"),
                codelines = [],
                replacers = {},
                lines = [],
                callback = function (i) {
                    lines = [];
                    for (var j = 1; j <= i; j++) {
                        replacers[j - 1] && lines.pop();
                        lines.push(codelines[j - 1]);
                    }
                    Snap("#svg").clear();
                    str = lines.join("\n");
                    eval(str);
                    code.innerHTML = Prism.highlight(str, Prism.languages.javascript);
                    code.parentNode.scrollTop = code.parentNode.scrollTopMax || 1e9;
                };
            for (var i = 0, ii = domcodelines.length; i < ii; i++) {
                codelines[i] = domcodelines[i].innerHTML;
                if (domcodelines[i].className == "replace") {
                    replacers[i] = true;
                }
            }
            callback(1);
            chooser(g, codelines.length)(callback);
            eve.on("tut.click", function (I) {
                callback(I + 1);
            });
        };
        