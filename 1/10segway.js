

        var DEGTORAD = 0.0174532925199432957;
        var RADTODEG = 57.295779513082320876;
        var PENDULUM_LENGTH = 10;

        var targetPosition = 0;
        var targetPositionInterval = setInterval(changeTargetPos, 8000);
        function changeTargetPos(){
            targetPosition = targetPosition===0 ? 10 : 0;
        }
        changeTargetPos();

        var posAvg = 0;

        var angleController = new PIDController();
        angleController.gainP = 1000;
        angleController.gainI = 0;
        angleController.gainD = 250;

        var positionController = new PIDController();
        positionController.gainP = 0.5;
        positionController.gainI = 0;
        positionController.gainD = 1.5;

        // Create demo application
        var app = new p2.WebGLRenderer(function(){

            var world = new p2.World({
                gravity : [0,-30]
            });
            this.setWorld(world);

            world.defaultContactMaterial.friction = 10;

            pendulumBody = new p2.Body({
                mass: 1,
                position: [0, 2 + 0.5 * PENDULUM_LENGTH]
            });
            pendulumBody.addShape(new p2.Box({ width: 1, height: PENDULUM_LENGTH }));
            world.addBody(pendulumBody);

            wheelBody = new p2.Body({
                mass: 1,
                position: [0,1]
            });
            wheelBody.addShape(new p2.Circle({ radius: 0.6 }));
            world.addBody(wheelBody);

            var wheelJoint = new p2.RevoluteConstraint(wheelBody, pendulumBody, {
                localPivotA: [0, 0],
                localPivotB: [0, -0.5 * PENDULUM_LENGTH],
                collideConnected: false
            });
            world.addConstraint(wheelJoint);
            wheelJoint.motorEnabled = true;
            var m = 40;
            wheelJoint.motorEquation.maxForce = m;
            wheelJoint.motorEquation.minForce = -m;

            // Create ground
            var groundShape = new p2.Plane();
            var groundBody = new p2.Body({
                position:[0,0],
            });
            groundBody.addShape(groundShape);
            world.addBody(groundBody);

            world.on('postStep', function(){

                var targetAngle = 0;
                if ( true ) {
                    var alpha = 0.4;
                    posAvg = (1 - alpha) * posAvg + alpha * pendulumBody.position[0];

                    positionController.currentError = targetPosition - posAvg;
                    positionController.step(world.lastTimeStep);
                    var targetLinAccel = positionController.output;
                    targetLinAccel = clamp(targetLinAccel, -10.0, 10.0);

                    targetAngle = targetLinAccel / world.gravity[1];
                    targetAngle = clamp(targetAngle, -15 * DEGTORAD, 15 * DEGTORAD);
                }

                var currentAngle = pendulumBody.angle;
                currentAngle = normalizeAngle(currentAngle);
                angleController.currentError = ( targetAngle - currentAngle );
                angleController.step(world.lastTimeStep);
                var targetSpeed = angleController.output;

                // give up if speed required is really high
                if ( Math.abs(targetSpeed) > 1000 )
                    targetSpeed = 0;

                // this is the only output
                var targetAngularVelocity = -targetSpeed / (2 * Math.PI * wheelBody.shapes[0].radius); // wheel circumference = 2*pi*r
                wheelJoint.motorSpeed = targetAngularVelocity;
            });

            app.frame(3,5,16,16);
        });

        /*
            Simple PID controller for single float variable
            http://en.wikipedia.org/wiki/PID_controller#Pseudocode
        */
        function PIDController(){
            this.gainP = 1;
            this.gainI = 1;
            this.gainD = 1;

            this.currentError = 0;
            this.previousError = 0;
            this.integral = 0;
            this.output = 0;
        }

        PIDController.prototype.step = function(dt) {
            this.integral = dt * (this.integral + this.currentError);
            var derivative = (1 / dt) * (this.currentError - this.previousError);
            this.output = this.gainP * this.currentError + this.gainI * this.integral + this.gainD * derivative;
            this.previousError = this.currentError;
        };

        function clamp(num, min, max) {
            return Math.min(Math.max(num, min), max);
        };

        function normalizeAngle(angle) {
            while (angle >  180 * DEGTORAD) angle -= 360 * DEGTORAD;
            while (angle < -180 * DEGTORAD) angle += 360 * DEGTORAD;
            return angle;
        }

    