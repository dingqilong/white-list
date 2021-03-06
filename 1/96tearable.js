

        // Create demo application
        var app = new p2.WebGLRenderer(function(){

            // Create a World
            var world = new p2.World({
                gravity : [0,-15]
            });

            this.setWorld(world);

            world.solver.iterations = 30;
            world.solver.tolerance = 0.001;

            // Create circle rope
            var N=10,  // Number of circles
                r=0.1; // Radius of circle
            var lastBody,
                constraints = [];
            for(var i=N-1; i>=0; i--){
                var x = 0,
                    y = (N-i - N/2)*r*2.1;
                var p = new p2.Body({
                    mass: i==0 ? 0 : 1, // top body has mass=0 and is static
                    position: [x,y],
                    angularDamping:0.5,
                });
                p.addShape(new p2.Circle({ radius: r }));
                world.addBody(p);
                if(lastBody){
                    // Create a DistanceConstraint, it will constrain the
                    // current and the last body to have a fixed distance from each other
                    var dist = Math.abs(p.position[1]-lastBody.position[1]),
                        c = new p2.DistanceConstraint(p,lastBody,{
                            distance: dist
                        });
                    world.addConstraint(c);
                    constraints.push(c);
                } else {
                    // Set horizontal velocity of the last body
                    p.velocity[0] = 1;
                }
                lastBody = p;
            }

            // Create ground
            var planeShape = new p2.Plane();
            var plane = new p2.Body({
                position:[0,(-N/2)*r*2.1],
            });
            plane.addShape(planeShape);
            world.addBody(plane);

            // After each physics step, we check the constraint force
            // applied. If it is too large, we remove the constraint.
            world.on("postStep",function(evt){
                for(var i=0; i<constraints.length; i++){
                    var c = constraints[i],
                        eqs = c.equations;
                    // Equation.multiplier can be seen as the magnitude of the force
                    if(Math.abs(eqs[0].multiplier) > 1500){
                        // Constraint force is too large... Remove the constraint.
                        world.removeConstraint(c);
                        constraints.splice(constraints.indexOf(c),1);
                    }
                }
            });
        });

    