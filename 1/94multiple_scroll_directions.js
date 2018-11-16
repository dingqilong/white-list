
						$(function () { // wait for document ready
							// init controller
							var controller = new ScrollMagic.Controller();

							// build tween
							var tween = TweenMax.to("#animate", 0.5, {scale: 3, ease: Linear.easeNone});

							// build scene
							var scene = new ScrollMagic.Scene({triggerElement: "#multiDirect", duration: 400, offset: 250})
											.setTween(tween)
											.setPin("#animate")
											.addIndicators({name: "resize"}) // add indicators (requires plugin)
											.addTo(controller);

							// init controller horizontal
							var controller_h = new ScrollMagic.Controller({vertical: false});

							// build tween horizontal
							var tween_h = TweenMax.to("#animate", 0.5, {rotation: 360, ease: Linear.easeNone});

							// build scene
							var scene_h = new ScrollMagic.Scene({duration: 700})
											.setTween(tween_h)
											.setPin("#animate")
											.addIndicators({name: "rotate"}) // add indicators (requires plugin)
											.addTo(controller_h);
						});
					