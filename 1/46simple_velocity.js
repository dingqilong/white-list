
						// init controller
						var controller = new ScrollMagic.Controller();

						// build scene
						var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
										// trigger a velocity opaticy animation
										.setVelocity("#animate", {opacity: 0}, {duration: 400})
										.addIndicators() // add indicators (requires plugin)
										.addTo(controller);
					