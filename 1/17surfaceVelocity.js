

        // Create demo application
        var app = new p2.WebGLRenderer(function(){

            // Create a World
            var world = new p2.World({
                gravity : [0,-10]
            });

            this.setWorld(world);

            // Create ground
            planeShape = new p2.Plane();
            plane = new p2.Body();
            plane.addShape(planeShape);
            world.addBody(plane);

            // Create moving box
            var boxBody = new p2.Body({
                    mass: 1,
                    position: [1,4]
                }),
                boxShape = new p2.Box({
                    width: 0.5,
                    height: 0.5,
                    material: new p2.Material()
                });
            boxBody.addShape(boxShape);
            world.addBody(boxBody);

            // Create static platform box
            var platformBody1 = new p2.Body({
                    mass: 0, // static
                    position: [-0.5,1]
                }),
                platformShape1 = new p2.Box({
                    width: 3,
                    height: 0.2,
                    material: new p2.Material()
                });
            platformBody1.addShape(platformShape1);
            world.addBody(platformBody1);

            // Create static platform box
            var platformBody2 = new p2.Body({
                    mass: 0, // static
                    position: [0.5, 2]
                }),
                platformShape2 = new p2.Box({
                    width: 3,
                    height: 0.2,
                    material: new p2.Material()
                });
            platformBody2.addShape(platformShape2);
            world.addBody(platformBody2);

            var contactMaterial1 = new p2.ContactMaterial(boxShape.material,platformShape1.material,{
                surfaceVelocity:-0.5,
            });
            world.addContactMaterial(contactMaterial1);

            var contactMaterial2 = new p2.ContactMaterial(boxShape.material,platformShape2.material,{
                surfaceVelocity:0.5,
            });
            world.addContactMaterial(contactMaterial2);

            this.frame(0,1,4,4);
        });

    