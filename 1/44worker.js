

		// Parameters
		var dt = 1/60,
			N = 100,
			boxWidth = 0.5,
			boxHeight = 0.5,
			zoom = 20,
			array = null,
			worker,
			canvas,
			ctx;

		initWorker();
		init();
		animate();

		function initWorker(){

			// Data array. Contains all our data we need for rendering: a 2D position and an angle per body.
			// It will be sent back and forth from the main thread and the worker thread. When
			// it's sent from the worker, it's filled with position data of all bodies.
			array = new Float32Array(N * 3);

			// Create a blob for the inline worker code
			var blob = new Blob([document.querySelector('#worker1').textContent],{type:'text/javascript'});
			var url = window.URL.createObjectURL(blob);

			// Create worker
			worker = new Worker(url);
			worker.postMessage = worker.webkitPostMessage || worker.postMessage;

			worker.onmessage = function(e) {
				// When we get a message from the worker, store it
				array = e.data;
			}

			// Start the worker by sending an initial message
			worker.postMessage({
				N : N,
				dt : dt,
				boxWidth: boxWidth,
				boxHeight: boxHeight,
				p2Url : document.location.href.replace(/\/[^/]*$/,"/") + "../../build/p2.js",
			});

			sendBuffer();
		}

		function init(){

			// Init canvas
			canvas = document.getElementById("myCanvas");
			w = canvas.width;
			h = canvas.height;

			ctx = canvas.getContext("2d");
			ctx.lineWidth = 0.05;
		}

		function drawBodies(){
			// Draw all bodies. Skip the first one, it's the ground plane
			for(var i=1; i < N; i++){
				ctx.beginPath();
				var x = array[i * 3 + 0],
					y = array[i * 3 + 1],
					angle = array[i * 3 + 2];
				ctx.save();
				ctx.translate(x, y);        // Translate to the center of the box
				ctx.rotate(angle);  // Rotate to the box body frame
				ctx.rect(-boxWidth/2, -boxHeight/2, boxWidth, boxHeight);
				ctx.stroke();
				ctx.restore();
			}
		}

		function render(){
			// Clear the canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Transform the canvas
			// Note that we need to flip the y axis since Canvas pixel coordinates
			// goes from top to bottom, while physics does the opposite.
			ctx.save();
			ctx.translate(canvas.width / 2, canvas.height / 2);  // Translate to the center
			ctx.scale(zoom, -zoom);       // Zoom in and flip y axis

			// Draw all bodies
			drawBodies();

			// Restore transform
			ctx.restore();
		}

		function sendBuffer(){
			worker.postMessage(array, [array.buffer]);
			array = null;
		}

		// Animation loop
		function animate(){
			requestAnimationFrame(animate);

			// Render scene
			if(array){
				render();
				sendBuffer();
			}
		}

	 