
        window.onload = function () {

            var diagramgroup = Snap.select("#crocodile-2"),
                elements = {},
                elementkeys = ['map', 'pie', 'eye'],
                diagramtimer = [],
                animating = {},
                cleartimers = {},
                i = 0, j = 0;

            function show(key) {
                if (animating[key]) return;
                clearTimeout(cleartimers[key]);
                animating[key] = true;
                var element = elements[key],
                x = element[0].getBBox().x,
                offset = x/2 + 25;
                element[0].attr({
                    transform: "t"+offset+",80s0.5,0.5,0,0"
                });
                setTimeout(function() {
                    element[0].animate({opacity:1,transform:"t0,0s1,1,0,0"}, 500, mina.elastic);
                }, 50);
                element[1].animate({opacity:0.25}, 400);
                setTimeout(function(){animating[key] = false}, 550);
            }

            function showAll() {
                j = 0;
                function cycle() {
                    show(elementkeys[j]);
                    j++;
                    if (j < elementkeys.length) setTimeout(cycle, 200);
                }
                cycle();
            }

            function hoverIn() {
                show( this.node.id.replace('hit-', '') );
            }


            for (i = 0; i < elementkeys.length; i++) {
                var key = elementkeys[i],
                diagram = diagramgroup.select("#diagram-" + key).attr({opacity:0}),
                path = diagramgroup.select("#path-" + key).attr({opacity:0}),
                hitarea = diagramgroup.select("#hit-" + key);
                hitarea.hover(hoverIn);
                elements[key] = [diagram, path];
            }

            diagramtimer = setTimeout(showAll, 250);


        };
        