
        function main () {
            // This demo shows how to create an SVG node which is a bit more complex
            // than single image. Do accomplish this we use 'g' element and
            // compose group of elements to represent a node.
            var graph = Viva.Graph.graph();

            var graphics = Viva.Graph.View.svgGraphics(),
                nodeSize = 24;

            graph.addNode('anvaka', '91bad8ceeec43ae303790f8fe238164b');
            graph.addNode('indexzero', 'd43e8ea63b61e7669ded5b9d3c2e980f');
            graph.addLink('anvaka', 'indexzero');

            graphics.node(function(node) {
              // This time it's a group of elements: http://www.w3.org/TR/SVG/struct.html#Groups
              var ui = Viva.Graph.svg('g'),
                  // Create SVG text element with user id as content
                  svgText = Viva.Graph.svg('text').attr('y', '-4px').text(node.id),
                  img = Viva.Graph.svg('image')
                     .attr('width', nodeSize)
                     .attr('height', nodeSize)
                     .link('https://secure.gravatar.com/avatar/' + node.data);

              ui.append(svgText);
              ui.append(img);
              return ui;
            }).placeNode(function(nodeUI, pos) {
                // 'g' element doesn't have convenient (x,y) attributes, instead
                // we have to deal with transforms: http://www.w3.org/TR/SVG/coords.html#SVGGlobalTransformAttribute
                nodeUI.attr('transform',
                            'translate(' +
                                  (pos.x - nodeSize/2) + ',' + (pos.y - nodeSize/2) +
                            ')');
            });

            // Render the graph
            var renderer = Viva.Graph.View.renderer(graph, {
                    graphics : graphics
                });
            renderer.run();
        }
    