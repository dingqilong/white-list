
						// init controller
						var controller = new ScrollMagic.Controller();

						// build tween
						var tween = TweenMax.to("#target", 0.5, {css: {scaleX: 1, scaleY: 1}, ease: Linear.easeNone});

						// build scene
						var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
										.setTween(tween)
										.addIndicators() // add indicators (requires plugin)
										.addTo(controller);

						$("#tweenparams input").on("change", function () {
							var params = {css: {
								scaleX: parseFloat($("input#scaleX").val()),
								scaleY: parseFloat($("input#scaleY").val())
							}};
							// reset progress to start so changes do not occur from current position but from start
							tween.progress(0)
							// set set new tween parameters
							tween.updateTo(params, true);
							// re-add tween to reset position and to update
							scene.setTween(tween);
						});
					