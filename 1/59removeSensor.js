

        var interval, removeBody;

        // Create demo application
        var app = new p2.WebGLRenderer({
            setup: function(){

                var world = new p2.World({
                    gravity : [0,-10]
                });

                this.setWorld(world);

                // Create circle
                var shape = new p2.Circle({ radius: 0.4 });
                var body = new p2.Body({
                    mass: 1,
                    position: [0,3]
                });
                body.addShape(shape);

                // Create ground.
                var planeShape = new p2.Plane();
                var plane = new p2.Body({
                    position:[0,-1]
                });
                plane.addShape(planeShape);
                world.addBody(plane);

                // The beginContact event is fired whenever two shapes starts overlapping, including sensors.
                world.on("beginContact",function(event){
                    // We cannot remove the body here since the world is still stepping.
                    // Instead, schedule the body to be removed after the step is done.
                    removeBody = body;
                });

                // The postStep event is fired after a physics tick.
                // Removal of bodies, shapes and constraints is safe here.
                world.on("postStep",function(event){
                    if(removeBody){
                        // Remove the body from the world.
                        world.removeBody(removeBody);
                        removeBody = null;
                    }
                });

                function spawnBody(){
                    if(!body.world){
                        body.position[0] = 0;
                        body.position[1] = 2;
                        body.velocity[0] = body.velocity[1] = body.angularVelocity = 0;
                        world.addBody(body);
                    }
                }

                spawnBody();

                interval = setInterval(spawnBody,2000);
            },

            teardown: function(){
                clearInterval(interval);
            }
        });

    