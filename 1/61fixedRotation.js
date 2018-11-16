

        // Create demo application
        var app = new p2.WebGLRenderer(function(){

            var world = new p2.World({
                gravity : [0,-10]
            });

            this.setWorld(world);

            world.solver.tolerance = 0.01;

            boxBody = new p2.Body({
                mass: 1,
                position: [-1,2],
                fixedRotation: true
            });
            boxBody.addShape(new p2.Box({ width: 1, height: 1 }));
            world.addBody(boxBody);

            boxBody = new p2.Body({
                mass: 1,
                position: [-0.3,0],
                fixedRotation: true
            });
            boxBody.addShape(new p2.Box({ width: 1, height: 1 }));
            world.addBody(boxBody);

            // Create ground
            var planeShape = new p2.Plane();
            var plane = new p2.Body({
                position:[0,-1],
            });
            plane.addShape(planeShape);
            world.addBody(plane);
        });

    