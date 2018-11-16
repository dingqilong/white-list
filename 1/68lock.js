

        // Create demo application
        var app = new p2.WebGLRenderer(function(){

            // Create physics world
            var world = new p2.World({
                gravity : [0,-10]
            });

            this.setWorld(world);

            world.solver.iterations = 100;
            world.solver.tolerance = 0.001;

            // Create two circles
            var bodyA = new p2.Body({
                mass: 5,
                position: [-1, 1],
            });
            bodyA.addShape(new p2.Circle({ radius: 0.5 }));
            world.addBody(bodyA);
            var bodyB = new p2.Body({
                mass: 5,
                position: [1, 1],
            });
            bodyB.addShape(new p2.Circle({ radius: 0.5 }));
            world.addBody(bodyB);

            // Create constraint.
            // This will lock bodyB to bodyA
            var constraint = new p2.LockConstraint(bodyA, bodyB);
            world.addConstraint(constraint);

            // Create a beam made of locked rectangles
            var r = 1,
                lastBody,
                N = 10;
            for(var i=0; i<N; i++){
                var body = new p2.Body({
                    mass:1,
                    position:[i*0.5*r - N*0.5*r/2,3]
                });
                body.addShape(new p2.Box({ width: 0.5, height: 0.5 }));
                world.addBody(body);
                if(lastBody){
                    // Connect current body to the last one
                    var constraint = new p2.LockConstraint(lastBody, body, {
                        collideConnected : false
                    });
                    world.addConstraint(constraint);
                }
                lastBody = body;
            }

            // Create ground
            var planeShape = new p2.Plane();
            var plane = new p2.Body({
                position : [0,-1],
            });
            plane.addShape(planeShape);
            world.addBody(plane);
        });

    