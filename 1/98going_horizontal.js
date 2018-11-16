
						// init controller
						var controller = new ScrollMagic.Controller({vertical: false});

						// build tween
						var tween = TweenMax.to("#target", 0.5, {backgroundColor: "green", width: "+=400"});

						// build scene
						var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500})
										.setTween(tween)
										.addIndicators() // add indicators (requires plugin)
										.addTo(controller);
					