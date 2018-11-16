
      var canvas, ctx, w, h,
          world, boxBody, planeBody;

      init();
      requestAnimationFrame(animate);

      function init(){

        // Init canvas
        canvas = document.getElementById("myCanvas");
        w = canvas.width;
        h = canvas.height;

        ctx = canvas.getContext("2d");
        ctx.lineWidth = 0.05;

        // Init p2.js
        world = new p2.World();

        // Add a box
        boxShape = new p2.Box({
          width: 2,
          height: 1
        });
        boxBody = new p2.Body({
          mass: 1,
          position: [0,3],
          angularVelocity: 1
        });
        boxBody.addShape(boxShape);
        world.addBody(boxBody);

        // Add a plane
        planeShape = new p2.Plane();
        planeBody = new p2.Body();
        planeBody.addShape(planeShape);
        world.addBody(planeBody);
      }

      function drawbox(){
        ctx.beginPath();
        var x = boxBody.interpolatedPosition[0],
            y = boxBody.interpolatedPosition[1];
        ctx.save();
        ctx.translate(x, y);        // Translate to the center of the box
        ctx.rotate(boxBody.angle);  // Rotate to the box body frame
        ctx.rect(-boxShape.width/2, -boxShape.height/2, boxShape.width, boxShape.height);
        ctx.stroke();
        ctx.restore();
      }

      function drawPlane(){
        var y = planeBody.interpolatedPosition[1];
        ctx.moveTo(-w, y);
        ctx.lineTo( w, y);
        ctx.stroke();
      }

      function render(){
        // Clear the canvas
        ctx.clearRect(0,0,w,h);

        // Transform the canvas
        // Note that we need to flip the y axis since Canvas pixel coordinates
        // goes from top to bottom, while physics does the opposite.
        ctx.save();
        ctx.translate(w/2, h/2);  // Translate to the center
        ctx.scale(50, -50);       // Zoom in and flip y axis

        // Draw all bodies
        drawbox();
        drawPlane();

        // Restore transform
        ctx.restore();
      }

      // Animation loop
      var lastTime;
      var maxSubSteps = 5; // Max physics ticks per render frame
      var fixedDeltaTime = 1 / 60; // Physics "tick" delta time
      function animate(time){
        requestAnimationFrame(animate);

        // Get the elapsed time since last frame, in seconds
        var deltaTime = lastTime ? (time - lastTime) / 1000 : 0;
        lastTime = time;

        // Make sure the time delta is not too big (can happen if user switches browser tab)
        deltaTime = Math.min(1 / 10, deltaTime);

        // Move physics bodies forward in time
        world.step(fixedDeltaTime, deltaTime, maxSubSteps);

        // Render scene
        render();
      }
    