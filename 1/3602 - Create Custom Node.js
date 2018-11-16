
        function main () {
            // Step 1. Create a graph:
            var graph = Viva.Graph.graph();

            // Step 2. Add graph content.
            //  graph.addNode(nodeId, yourCustomData) method lets you add new
            //  nodes to the graph and associate them with custom data. In this
            //  case we are associating GitHub user profiles with their Gravatar's images:
            graph.addNode('anvaka', '91bad8ceeec43ae303790f8fe238164b');
            graph.addNode('indexzero', 'd43e8ea63b61e7669ded5b9d3c2e980f');

            graph.addLink('anvaka', 'indexzero');

            // Step 3. Customize node appearance.
            //  Vivagraph can present graph in multiple ways. svgGraphics() - is
            //  the way to render graph in SVG format:
            var graphics = Viva.Graph.View.svgGraphics();

            // This function let us override default node appearance and create
            // something better than blue dots:
            graphics.node(function(node) {
                // node.data holds custom object passed to graph.addNode():
                var url = 'https://secure.gravatar.com/avatar/' + node.data;

                return Viva.Graph.svg('image')
                     .attr('width', 24)
                     .attr('height', 24)
                     .link(url);
            });

            // Usually when you have custom look for nodes, you might want to
            // set their position in a new way too. placeNode() method serves
            // this goal:
            graphics.placeNode(function(nodeUI, pos) {
                // nodeUI - is exactly the same object that we returned from
                //   node() callback above.
                // pos - is calculated position for this node.
                nodeUI.attr('x', pos.x - 12).attr('y', pos.y - 12);
            });

            // Step 4. Render the graph with our customized graphics object:
            var renderer = Viva.Graph.View.renderer(graph, {
                    graphics : graphics
                });
            renderer.run();
        }
    