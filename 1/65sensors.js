
      var w, h, canvas, ctx, world, circleBody, sensorBody;

      init();
      requestAnimationFrame(animate);

      function init(){

        // Init canvas
        canvas = document.getElementById("myCanvas");
        w = canvas.width;
        h = canvas.height;
        ctx = canvas.getContext("2d");
        ctx.fillStyle='green';

        // Init world
        world = new p2.World({ gravity:[0,0] });

        // Add a circle
        circleShape = new p2.Circle();
        circleBody = new p2.Body({ mass:1 });
        circleBody.damping = 0;
        circleBody.addShape(circleShape);
        world.addBody(circleBody);

        // Add a sensor circle
        sensorShape = new p2.Circle();
        sensorShape.sensor = true;
        sensorBody = new p2.Body();
        sensorBody.damping = 0;
        sensorBody.addShape(sensorShape);
        world.addBody(sensorBody);

        world.on("beginContact",function(event){
          ctx.fillStyle = 'red';
        });
        world.on("endContact",function(event){
          ctx.fillStyle = 'green';
        });
      }

      function drawCircle(ctx,body){
        ctx.beginPath();
        var radius = circleShape.radius;
        ctx.arc(body.position[0], body.position[1], radius, 0, 2*Math.PI);
        ctx.fill();
      }

      function render(){
        ctx.clearRect(0,0,w,h);
        ctx.save();
        ctx.translate(w/2, h/2);
        ctx.scale(50, -50);
        drawCircle(ctx,circleBody);
        drawCircle(ctx,sensorBody);
        ctx.restore();
      }

      var lastTime, timeStep = 1 / 60, maxSubSteps = 5;

      // Animation loop
      function animate(time){
        requestAnimationFrame(animate);

        var dt = lastTime ? (time - lastTime) / 1000 : 0;
        dt = Math.min(1 / 10, dt);
        lastTime = time;

        circleBody.position[0] = 3*Math.sin(world.time);

        // Move physics bodies forward in time
        world.step(timeStep, dt, maxSubSteps);

        // Render scene
        render(time);
      }

    