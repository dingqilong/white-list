
  Crafty.init(200, 200);
  Crafty.c("Test", {
    init: function() {
      this.requires('2D, DOM, Color, Mouse, Draggable');
    },
  });

  Crafty.scene('main', function() {
    Crafty.e("Test")
        .attr({x: 100, y: 100, w:100, h:100})
        .color('red');
  });

  Crafty.scene('main');
