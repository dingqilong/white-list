
	$(document).ready(function() {
		$.fn.fullpage({
			'verticalCentered': false,
			'anchors': ['page1', 'page2', 'page3', 'page4'],
			'css3': true,
			'slidesColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
			'navigation': true,
			'navigationPosition': 'right',
			'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],
			
			'afterLoad': function(anchorLink, index){
				if(index == 2){
					$('#iphone3, #iphone2, #iphone4').addClass('active');
				}
				$('#infoMenu').toggleClass('whiteLinks', index ==4);
				
			},
			
			'onLeave': function(index, direction){
				if (index == 3 && direction == 'down'){
					$('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
				}
				else if(index == 3 && direction == 'up'){
					$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
				}
				
				$('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
				$('#staticImg').toggleClass('moveDown', index == 3 && direction == 'down');	
			},
			
			afterRender: function(){
				$('#infoMenu').appendTo('body');
				
				$('#githubLink, .twitter-share-button').appendTo('body');
			}

		});
	});
