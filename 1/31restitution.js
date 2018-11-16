

        // Create demo application
        var app = new p2.WebGLRenderer(function(){

            // Create a World
            var world = new p2.World({
                gravity: [0, -10]
            });

            this.setWorld(world);

            var ballBody1 = new p2.Body({
                position: [-2,1],
                mass: 1,
                damping: 0, // Remove damping from the ball, so it does not lose energy
                angularDamping: 0
            });

            // Create a material for the circle shape
            var circleShape1 = new p2.Circle({
                radius: 0.5,
                material: new p2.Material()
            });
            ballBody1.addShape(circleShape1);

            // Add ball to world
            world.addBody(ballBody1);

            // Create a platform that the ball can bounce on
            var platformShape1 = new p2.Box({
                width: 1,
                height: 1,
                material: new p2.Material()
            });
            var platformBody1 = new p2.Body({
                position:[-2,-1],
            });
            platformBody1.addShape(platformShape1);
            world.addBody(platformBody1);

            // Create contact material between the two materials.
            // The ContactMaterial defines what happens when the two materials meet.
            // In this case, we use some restitution.
            world.addContactMaterial(new p2.ContactMaterial(platformShape1.material, circleShape1.material, {
                restitution: 1,
                stiffness: Number.MAX_VALUE // We need infinite stiffness to get exact restitution
            }));


            // Create another ball
            var circleShape2 = new p2.Circle({
                radius: 0.5,
                material: new p2.Material()
            });
            var ballBody2 = new p2.Body({
                position: [0, 1],
                mass: 1,
                damping: 0,
                angularDamping: 0
            });
            ballBody2.addShape(circleShape2);
            world.addBody(ballBody2);

            // Create another platform
            var platformShape2 = new p2.Box({
                width: 1,
                height: 1,
                material: new p2.Material()
            });
            var platformBody2 = new p2.Body({
                position: [0, -1],
            });
            platformBody2.addShape(platformShape2);
            world.addBody(platformBody2);

            world.addContactMaterial(new p2.ContactMaterial(platformShape2.material, circleShape2.material, {
                restitution: 0 // This means no bounce!
            }));

            // New ball
            var circleShape3 = new p2.Circle({
                radius: 0.5,
                material: new p2.Material()
            });
            var ballBody3 = new p2.Body({
                position: [2, 1],
                mass: 1,
                damping: 0,
                angularDamping: 0
            });
            ballBody3.addShape(circleShape3);
            world.addBody(ballBody3);

            var planeShape3 = new p2.Box({
                width: 1,
                height: 1,
                material: new p2.Material()
            });
            var plane3 = new p2.Body({
                position:[2, -1],
            });
            plane3.addShape(planeShape3);
            world.addBody(plane3);

            world.addContactMaterial(new p2.ContactMaterial(planeShape3.material, circleShape3.material, {
                restitution: 0,
                stiffness: 200, // This makes the contact soft!
                relaxation: 0.1
            }));
        });

    