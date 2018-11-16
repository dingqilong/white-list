
						$(function () { // wait for document ready
							// init controller
							var controller = new ScrollMagic.Controller({loglevel: 3});

							// build tween
							var tween = TweenMax.to("#target", 0.5, {backgroundColor: "black"});

							// build scene
							var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, loglevel: 3})
											.setTween(tween)
											.setPin("#target")
											.addIndicators() // add indicators (requires plugin)
											.addTo(controller);

							// checkbox actions
							$("form.loglevel input[type=checkbox]").on("change", function (e) {
								var
									target = $(this).attr("id") == "logcontroller" ? controller : scene,
									level = $(this).prop("checked") ? 3 : 0;

								target.loglevel(level);
							});
						});
					