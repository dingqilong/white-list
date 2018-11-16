
						$(function () { // wait for document ready
							// init controller
							var controller = new ScrollMagic.Controller();

							// show pin state
							function updateBox (e) {
								if (e.type == "enter") {
									$("#pin p").text("Pinned.");
								} else {
									$("#pin p").text("Unpinned.");
								}
							}

							// build scenes
							new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150})
								.setPin("#pin")
								.setClassToggle("#pin", "green")
								.on("enter leave", updateBox)
								.addIndicators() // add indicators (requires plugin)
								.addTo(controller);

							new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150, offset: 300})
								.setPin("#pin")
								.setClassToggle("#pin", "green")
								.on("enter leave", updateBox)
								.addIndicators() // add indicators (requires plugin)
								.addTo(controller);

							new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150, offset: 600})
								.setPin("#pin")
								.setClassToggle("#pin", "green")
								.on("enter leave", updateBox)
								.addIndicators() // add indicators (requires plugin)
								.addTo(controller);
						});
					