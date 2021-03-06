
        function main() {
            var graph = Viva.Graph.graph(),
                graphics = Viva.Graph.View.svgGraphics(),
                renderer = Viva.Graph.View.renderer(graph, {
                    graphics: graphics
                });

            graph.addLink(1, 2, 'Buy');
            graph.addLink(1, 2, 'Sell');

            graphics.link(function(link){
                var isBuy = (link.data === 'Buy'),
                    ui = Viva.Graph.svg('path')
                           .attr('stroke', isBuy ? 'red' : 'blue')
                           .attr('fill', 'none');

                ui.isBuy = isBuy; // remember for future.

                return ui;
            }).placeLink(function(linkUI, fromPos, toPos) {
                // linkUI - is the object returend from link() callback above.
                var ry = linkUI.isBuy ? 10 : 0,
                // using arc command: http://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands
                    data = 'M' + fromPos.x + ',' + fromPos.y +
                           ' A 10,' + ry + ',-30,0,1,' + toPos.x + ',' + toPos.y;

                // 'Path data' (http://www.w3.org/TR/SVG/paths.html#DAttribute )
                // is a common way of rendering paths in SVG:
                linkUI.attr("d", data);
            });

            renderer.run();
        }
    