

        // Create demo application
        var app = new p2.WebGLRenderer(function(){

            // Create a world
            var world = new p2.World({
                gravity : [0, -10]
            });

            this.setWorld(world);

            // Create a circle
            var shape = new p2.Circle({
                radius: 0.5,
                material: new p2.Material()
            });
            var p = new p2.Body({
                mass: 1,
                position: [0, 1.5],
            });
            p.addShape(shape);
            world.addBody(p);

            // Create a slippery circle
            var slipperyShape = new p2.Circle({
                radius: 0.5,
                material: new p2.Material()
            });
            var p = new p2.Body({
                mass: 1,
                position: [-1.5, 1.5],
            });
            p.addShape(slipperyShape);
            world.addBody(p);

            // Create ground
            var planeShape = new p2.Plane({
                material: new p2.Material()
            });
            var plane = new p2.Body({
                angle: Math.PI / 16
            });
            plane.addShape(planeShape);
            world.addBody(plane);

            // When the materials of the plane and the first circle meet, they should yield
            // a contact friction of 0.3. We tell p2 this by creating a ContactMaterial.
            frictionContactMaterial = new p2.ContactMaterial(planeShape.material, shape.material, {
                friction: 0.3
            });
            world.addContactMaterial(frictionContactMaterial);

            // When the plane and the slippery circle meet, the friction should be 0 (slippery). Add a new ContactMaterial.
            slipperyContactMaterial = new p2.ContactMaterial(planeShape.material, slipperyShape.material, {
                friction: 0
            });
            world.addContactMaterial(slipperyContactMaterial);
        });

    