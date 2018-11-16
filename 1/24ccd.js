

        // Create demo application
        var app = new p2.WebGLRenderer(function(){

            // Create the world
            var world = new p2.World({
                gravity : [0,0]
            });

            this.setWorld(world);

            // Set stiffness of all contacts and constraints
            world.setGlobalStiffness(1e18);
            world.defaultContactMaterial.restitution = 0.1;

            for(var i=0; i<2; i++){
                var y = (i - 0.5) * 1.5;

                // Create circle bodies
                var shape = new p2.Circle({ radius: 0.5 });
                var p = new p2.Body({
                    mass: 1,
                    position: [-11, y],
                    velocity: [100,0],
                    ccdSpeedThreshold: i === 0 ? 0 : -1
                });
                p.addShape(shape);
                world.addBody(p);

                var shape = new p2.Circle({ radius: 0.5 });
                var p = new p2.Body({
                    mass: 0,
                    position: [0, y],
                });
                p.addShape(shape);
                world.addBody(p);
            }

            // Start demo
            this.frame(0, 0, 20, 20);
        });

    