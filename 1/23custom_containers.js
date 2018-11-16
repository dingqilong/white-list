
							$(function () { // wait for document ready
								// init controller
								var controller1 = new ScrollMagic.Controller({container: "#container1"});

								// build scene
								var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
									.addTo(controller1)
									.setTween(TweenMax.to("#container1 .animated", 0.5, {backgroundColor: "green"}))
									.addIndicators() // add indicators (requires plugin)
									.setPin("#container1 .animated");
							});
						