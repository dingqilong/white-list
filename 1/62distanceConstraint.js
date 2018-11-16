

        // Create demo application
        var app = new p2.WebGLRenderer(function(){

            // Create physics world
            var world = new p2.World({
                gravity : [0,-10]
            });

            this.setWorld(world);

            // Create two circles
            var bodyA = new p2.Body({
                mass: 1,
                position: [-2, 1],
            });
            bodyA.addShape(new p2.Circle({ radius: 0.5 }));
            world.addBody(bodyA);
            var bodyB = new p2.Body({
                mass: 1,
                position: [-0.5, 1],
            });
            bodyB.addShape(new p2.Circle({ radius: 0.5 }));
            world.addBody(bodyB);

            // Create constraint.
            // If target distance is not given as an option, then the current distance between the bodies is used.
            var constraint1 = new p2.DistanceConstraint(bodyA, bodyB);
            world.addConstraint(constraint1);
            constraint1.upperLimitEnabled = true;
            constraint1.lowerLimitEnabled = true;
            constraint1.upperLimit = 2;
            constraint1.lowerLimit = 1.5;

            // Create two boxes that must have distance 0 between their corners
            var w = h = 0.5;
            var boxBodyA = new p2.Body({
                mass: 1,
                position: [1.5, 1],
            });
            boxBodyA.addShape(new p2.Box({ width: 0.5, height: 0.5 }));
            world.addBody(boxBodyA);
            var boxBodyB = new p2.Body({
                mass: 1,
                position: [2, 1],
            });
            boxBodyB.addShape(new p2.Box({ width: 0.5, height: 0.5 }));
            world.addBody(boxBodyB);

            // Create constraint.
            var constraint2 = new p2.DistanceConstraint(boxBodyA, boxBodyB, {
                localAnchorA: [w/2, h/2],
                localAnchorB: [-w/2, h/2],
            });
            world.addConstraint(constraint2);


            // Create ground
            var planeShape = new p2.Plane();
            var plane = new p2.Body({
                position : [0,-1],
            });
            plane.addShape(planeShape);
            world.addBody(plane);
        });

    