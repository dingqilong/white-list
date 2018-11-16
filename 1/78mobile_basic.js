
				// build tween
				var tween = new TimelineMax ()
					.add([
						TweenMax.to(".mario", 1, {left: 50, ease: Circ.easeIn}),
						TweenMax.to(".mario", 1, {top: -60, ease: Circ.easeOut})
					])
					.add([
						TweenMax.to(".mario", 1, {top: 0, ease: Circ.easeIn}),
						TweenMax.to(".mario", 1, {left: 70, ease: Circ.easeOut})
					])
					.add(
						TweenMax.to(".goomba", 0.5, {scaleY: 0.1, "margin-top": 93, "margin-bottom": 7, ease: Circ.easeIn}), 1.5
					);

				// init controller
				var controller = new ScrollMagic.Controller({container: "#example-wrapper"});

				// build scene
				var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
								.setTween(tween)
								.addIndicators() // add indicators (requires plugin)
								.addTo(controller);
			