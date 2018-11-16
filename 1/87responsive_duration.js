
						// init controller
						var controller = new ScrollMagic.Controller();

						// build tween
						var tween = TweenMax.to("#animate", 0.5, {scale: 1.3, repeat: 5, yoyo: true});

						// build scene and set duration to window height
						var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "100%"})
										.setTween(tween)
										.addIndicators() // add indicators (requires plugin)
										.addTo(controller);
					