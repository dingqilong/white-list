
						$(function () { // wait for document ready
							// init controller
							var controller = new ScrollMagic.Controller({loglevel: 3});

							// build scene
							var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, loglevel: 3})
											.setPin("#destroybox")
											.addIndicators() // add indicators (requires plugin)
											.addTo(controller);

							$("a#destroy").on("click", function (e) {
								e.preventDefault();
								if ($(this).hasClass("disabled")) {
									alert("Already removed. Please relead page to try again.");
								} else {
									$(this).addClass("disabled");
									var reset = $("#reset").prop("checked");
									if ($("#destroyController").prop("checked")) {
										controller.destroy(reset);
										controller = null;
									} else {
										scene.destroy(reset);
									}
									scene = null;
									tween = null;
								}
							});
						});
					