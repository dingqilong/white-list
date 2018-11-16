

        // Create demo application
        var app = new p2.WebGLRenderer(function(){

            // Create the physics world
            var world = new p2.World({
                gravity : [0,-10]
            });

            this.setWorld(world);

            // Create two rectangle bodies
            var bodyA = new p2.Body({
                mass: 1,
                position: [-1,0],
            });
            bodyA.addShape(new p2.Box({ width: 1, height: 1 }));
            world.addBody(bodyA);
            var bodyB = new p2.Body({
                mass: 1,
                position: [1,0],
            });
            bodyB.addShape(new p2.Box({ width: 1, height: 1 }));
            world.addBody(bodyB);

            // Create PrismaticConstraint, aka "slider".
            // It lets two bodies slide along an axis.
            var prismatic = new p2.PrismaticConstraint(bodyA, bodyB, {
                localAnchorA :  [ 1, 0],    // Anchor point in bodyA, where the axis starts
                localAnchorB :  [-1, 0],    // Anchor point in bodyB, that will slide along the axis
                localAxisA :    [ 0, 1],    // An axis defined locally in bodyA
                upperLimit :    0.5,        // Upper limit along the axis
                lowerLimit :    -0.5,       // Lower limit along the axis
            });
            world.addConstraint(prismatic);

            // Create ground
            var planeShape = new p2.Plane();
            var plane = new p2.Body({
                position:[0,-1],
            });
            plane.addShape(planeShape);
            world.addBody(plane);
        });
    