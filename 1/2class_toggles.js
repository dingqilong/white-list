
						// init controller
						var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});

						// build scenes
						new ScrollMagic.Scene({triggerElement: "#sec1"})
										.setClassToggle("#high1", "active") // add class toggle
										.addIndicators() // add indicators (requires plugin)
										.addTo(controller);
						new ScrollMagic.Scene({triggerElement: "#sec2"})
										.setClassToggle("#high2", "active") // add class toggle
										.addIndicators() // add indicators (requires plugin)
										.addTo(controller);
						new ScrollMagic.Scene({triggerElement: "#sec3"})
										.setClassToggle("#high3", "active") // add class toggle
										.addIndicators() // add indicators (requires plugin)
										.addTo(controller);
						new ScrollMagic.Scene({triggerElement: "#sec4"})
										.setClassToggle("#high4", "active") // add class toggle
										.addIndicators() // add indicators (requires plugin)
										.addTo(controller);
					