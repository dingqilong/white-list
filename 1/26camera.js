
  (function() {
    var config = {};
    config.viewportHeight = 320;
    config.viewportWidth = 640;
    config.playgroundWidth = 1024;
    config.playgroundHeight = 1024;
    config.imagePath = 'http://placekitten.com/' + config.playgroundWidth + '/' + config.playgroundHeight;

    var imageEntities = '2D, DOM, Image',
        hotspotEntities = '2D, DOM, Color, Mouse';


    Crafty.scene('main', function() {
      Crafty.background('#bada55');

      // background
      Crafty.e(imageEntities)
            .attr({
              w: config.playgroundWidth,
              h: config.playgroundHeight
            })
            .image(config.imagePath);

      // hotspot
      Crafty.e(hotspotEntities)
            .attr({
              x: config.playgroundWidth/2-100,
              y: config.playgroundHeight/2-100,
              w: 100,
              h: 100
            })
            .color('#f00')
            .bind('Click', function(){
              console.log('clicked');
            });

      var zoomFactor = config.viewportWidth / config.playgroundWidth;
      Crafty.viewport.zoom(zoomFactor, 0, 0, 5*60);
      Crafty.viewport.mouselook(true);
    });


    var clickHandler = function(e) {
      var self = e.target;
      Crafty.log(self);
      imageEntities = self.getAttribute('data-image-entities');
      hotspotEntities = self.getAttribute('data-hotspot-entities');
      Crafty.log('reloading scene: '+ self.innerHTML);
      Crafty.scene('main');
    };

    var lis = document.querySelectorAll('li');
    for (var i in lis) {
      if (!isFinite(i)) continue;
      lis[i].addEventListener('click', clickHandler, false);
    }


    Crafty.init(config.viewportWidth, config.viewportHeight);
    Crafty.s("CanvasLayer");
    Crafty.viewport.init(config.viewportWidth, config.viewportHeight);
    // Crafty.scene('main');

  }).call(window);
  