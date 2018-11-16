

			var array = [];

			for ( var i = 0; i < 500; i ++ ) {

				var stats = new Stats();
				stats.dom.style.position = 'relative';
				stats.dom.style.float = 'left';
				document.body.appendChild( stats.dom );

				array.push( stats );

			}

			function animate() {

				for ( var i = 0; i < array.length; i ++ ) {

					var stats = array[ i ];
					stats.update();

				}

				requestAnimationFrame( animate );

			}

			animate();

		