
						// make a variable to store the mouse pos.
						var mouseTopPerc = 0;
						// function to be used to retrieve variable
						function getMousePos() {
							return (mouseTopPerc * 400) + 10;
						}
						// update variable on mouse move
						$("body").on("mousemove", function (e) {
							mouseTopPerc = e.clientY/$(this).innerHeight();
						});							

						// init controller
						var controller = new ScrollMagic.Controller();

						// build tween
						var tween = TweenMax.to("#animate", 0.5, {rotationY: 180});

						// build scene and supply getMousePos function as duration
						var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: getMousePos})
										.setTween(tween)
										.addIndicators() // add indicators (requires plugin)
										.addTo(controller);
					