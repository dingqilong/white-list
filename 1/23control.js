

        var postStepHandler;

        var size = 6;

        function createStaticBox(world, x, y, width, height){
            var body = new p2.Body({
                position: [x, y]
            });
            body.addShape(new p2.Box({ width: width, height: height }));
            world.addBody(body);
            return body;
        }

        function shortestArc(a, b){
            if (Math.abs(b-a) < Math.PI)
                return b - a;
            if (b > a)
                return b-a-Math.PI * 2.0;
            return b-a+Math.PI * 2.0;
        }

        // Create demo application
        var app = new p2.WebGLRenderer({
            setup: function(){

                // Create the physics world
                var world = new p2.World({
                    gravity : [0, 0]
                });
                this.setWorld(world);

                // Add some boxes
                for(var i=0; i<10; i++){
                    var boxBody = new p2.Body({
                        mass: 0.5,
                        damping: 0.99,
                        angularDamping: 0.99,
                        position: [
                            (Math.random() - 0.5) * size,
                            (Math.random() - 0.5) * size
                        ],
                        angle: (Math.random() - 0.5) * Math.PI * 2
                    });
                    boxBody.addShape(new p2.Box({ width: 0.4, height: 0.4 }));
                    world.addBody(boxBody);
                }

                // Add walls
                createStaticBox(world, -size/2, 0, 0.1, size)
                createStaticBox(world, size/2, 0, 0.1, size)
                createStaticBox(world, 0, -size/2, size, 0.1)
                createStaticBox(world, 0, size/2, size, 0.1)

                // Character
                var characterBody = new p2.Body({
                    mass: 1
                });
                var characterShape = new p2.Circle({
                    radius: 0.5
                });
                characterBody.addShape(characterShape);
                world.addBody(characterBody);

                // Control body
                var controlBody = new p2.Body({
                    type: p2.Body.KINEMATIC,
                    collisionResponse: false
                });
                var controlShape = new p2.Circle({
                    radius: 0.1
                });
                controlBody.addShape(controlShape);
                world.addBody(controlBody);

                // Constrain control to character
                var constraint = new p2.RevoluteConstraint(controlBody, characterBody, {
                    localPivotA: [0, 0],
                    localPivotB: [0, 0],
                    maxForce: 40
                });
                constraint.setMaxBias(0); // emulate friction
                world.addConstraint(constraint);

                var gear = new p2.GearConstraint(controlBody, characterBody, {
                    maxTorque: 100
                });
                gear.setMaxBias(0);
                world.addConstraint(gear);

                var mouseDelta = p2.vec2.create();
                world.on('postStep', postStepHandler = function(){

                    // turn the control body
                    p2.vec2.subtract(mouseDelta, app.mousePosition, characterBody.position);
                    controlBody.angularVelocity = 10 * shortestArc(characterBody.angle, Math.atan2(mouseDelta[1], mouseDelta[0]));

                    // drive towards the mouse
                    if(p2.vec2.distance(app.mousePosition, characterBody.position) < 0.5){
                        p2.vec2.set(controlBody.velocity, 0, 0);
                    } else {
                        p2.vec2.copy(controlBody.velocity, mouseDelta);
                        p2.vec2.normalize(controlBody.velocity, controlBody.velocity);
                        p2.vec2.scale(controlBody.velocity, controlBody.velocity, 3);
                    }
                });

                this.frame(0, 0, 7, 7);
            },
            teardown: function(){
                world.off('postStep', postStepHandler);
            }
        });

    