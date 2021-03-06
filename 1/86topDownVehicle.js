

        // Create demo application
        var app = new p2.WebGLRenderer(function(){

            // Create a World
            var world = new p2.World({
                gravity : [0,0]
            });
            this.setWorld(world);

            // Create a dynamic body for the chassis
            chassisBody = new p2.Body({
                mass: 1
            });
            var boxShape = new p2.Box({ width: 0.5, height: 1 });
            chassisBody.addShape(boxShape);
            world.addBody(chassisBody);

            // Create the vehicle
            vehicle = new p2.TopDownVehicle(chassisBody);

            // Add one front wheel and one back wheel - we don't actually need four :)
            frontWheel = vehicle.addWheel({
                localPosition: [0, 0.5] // front
            });
            frontWheel.setSideFriction(4);

            // Back wheel
            backWheel = vehicle.addWheel({
                localPosition: [0, -0.5] // back
            });
            backWheel.setSideFriction(3); // Less side friction on back wheel makes it easier to drift

            vehicle.addToWorld(world);

            // Key controls
            var keys = {
                '37': 0, // left
                '39': 0, // right
                '38': 0, // up
                '40': 0 // down
            };
            var maxSteer = Math.PI / 5;
            this.on("keydown",function (evt){
                keys[evt.keyCode] = 1;
                onInputChange();
            });
            this.on("keyup",function (evt){
                keys[evt.keyCode] = 0;
                onInputChange();
            });
            function onInputChange(){

                // Steer value zero means straight forward. Positive is left and negative right.
                frontWheel.steerValue = maxSteer * (keys[37] - keys[39]);

                // Engine force forward
                backWheel.engineForce = keys[38] * 7;

                backWheel.setBrakeForce(0);
                if(keys[40]){
                    if(backWheel.getSpeed() > 0.1){
                        // Moving forward - add some brake force to slow down
                        backWheel.setBrakeForce(5);
                    } else {
                        // Moving backwards - reverse the engine force
                        backWheel.setBrakeForce(0);
                        backWheel.engineForce = -2;
                    }
                }
            }

        });

    