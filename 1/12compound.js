

        // Create demo application
        var app = new p2.WebGLRenderer(function(){

            var N = 2,
                M = 2,
                d = 1.2,
                r = 0.3;

            var world = new p2.World({
                gravity : [0,-10]
            });

            this.setWorld(world);

            // Create circle bodies
            body1 = new p2.Body({
                mass: 1,
                position: [-M*r*d, N*r*d*2],
                angularVelocity : 1
            });
            body2 = new p2.Body({
                mass: 1,
                position: [M*r*d, N*r*d*2],
                angularVelocity : 1
            });
            body3 = new p2.Body({
                mass: 1,
                position: [-2*M*r*d, N*r*d*2],
                angularVelocity : 1
            });
            for(var i=0; i<N; i++){
                for(var j=0; j<M; j++){
                    var x = (i-N/2+1/2)*2*r*d;
                    var y = (j-M/2+1/2)*2*r*d;
                    var angle = (j + i) * Math.PI / 8;
                    body1.addShape(new p2.Particle(), [x,y], 0);
                    body2.addShape(new p2.Circle({ radius: r }), [x,y], 0);
                    body3.addShape(new p2.Capsule({ radius: r/2, length: r }), [x,y], angle);
                }
            }
            world.addBody(body1);
            world.addBody(body2);
            world.addBody(body3);

            // Create boxes
            box = new p2.Body({
                position:[3,2],
                mass : 1,
                angularVelocity : -0.2
            });
            box.addShape(new p2.Box({ width: 1, height: 1 }), [0,0.5], Math.PI/4);
            box.addShape(new p2.Box({ width: 1, height: 1 }), [0,-0.5], 0);
            world.addBody(box);

            // Create circle
            var circleShape = new p2.Circle({ radius: 0.5 });
            var circle = new p2.Body({
                position:[3,4],
                mass : 1,
                angularVelocity:1
            });
            circle.addShape(circleShape);
            world.addBody(circle);

            // Create convex
            var verts = [];
            for(var i=0, N=5; i<N; i++){
                var a = 2*Math.PI / N * i;
                verts.push([0.5*Math.cos(a),0.5*Math.sin(a)]);
            }
            convex = new p2.Body({
                position:[-4,2],
                mass : 1,
                angularVelocity : -0.1
            });
            convex.addShape(new p2.Convex({ vertices: verts }),[0, 0.5]);
            convex.addShape(new p2.Convex({ vertices: verts }),[0,-0.5],Math.PI/4);
            world.addBody(convex);

            // Create ground
            planeShape = new p2.Plane();
            plane = new p2.Body({
                position:[0,-1],
            });
            plane.addShape(planeShape);
            world.addBody(plane);

            this.frame(0, 0, 6, 6);
        });

    