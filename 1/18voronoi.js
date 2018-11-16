

        // Create demo application
        var app = new p2.WebGLRenderer(function(){

            // Create the world
            var world = new p2.World({
                gravity : [0,-5]
            });
            this.setWorld(world);

            var voronoi = new Voronoi();
            var bbox = {
                xl: -2, // left
                xr: 2, // right
                yt: -2, // top
                yb: 2 // bottom
            };
            var sites = [];
            for(var i=0; i<50; i++){ // generate points within the bbox
                var site = {
                    x: bbox.xl + Math.random() * (bbox.xr - bbox.xl),
                    y: bbox.yb + Math.random() * (bbox.yt - bbox.yb)
                };
                sites.push(site);
            }
            var diagram = voronoi.compute(sites, bbox);

            for (var i = 0; i < diagram.cells.length; i++) {
                var cell = diagram.cells[i];
                var vertices = [];
                for (var j = 0; j < cell.halfedges.length; j++) {
                    var edge = cell.halfedges[j].getStartpoint();
                    vertices.push([
                        edge.x - cell.site.x,
                        -(edge.y - cell.site.y)
                    ]);
                }
                var body = new p2.Body({
                    position: [cell.site.x + 15, -cell.site.y ],
                    velocity: [-15, 5],
                    mass: 1
                });
                body.addShape(new p2.Convex({
                    vertices: vertices
                }));
                world.addBody(body);
            }

            var planeBody = new p2.Body({
                position: [0, -3]
            });
            planeBody.addShape(new p2.Plane());
            world.addBody(planeBody);

            var planeBody2 = new p2.Body({
                position: [-5, 0],
                angle: -Math.PI / 2
            });
            planeBody2.addShape(new p2.Plane());
            world.addBody(planeBody2);


            // Start demo
            this.frame(0, 0, 12, 12);
        });

    