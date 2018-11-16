
  window.onload = function(){

    
    Crafty.init(200, 200);
    Crafty.c("Bar", {
      init: function() {
        this.requires('2D, Color, Keyboard, Mouse, Draggable');
        this.attr({h: 100, w: 30});
        this.bind("Click", function(e){
          if (this.isDown("SHIFT")) {
            window.alert(
              "Clicked " + this._drawLayer.name +
              " @pos(" + e.realX.toFixed(2) + ", " + e.realY.toFixed(2) + ")"
            );
          }
        });
      }
    });
    
    var layerType = "Canvas";
    
    // Define 4 different layers with different x parallax 
    Crafty.createLayer("Background", layerType, {z: 10, xResponse: 0.2, scaleResponse: 1});
    Crafty.createLayer("Midground", layerType, {z: 15, xResponse: 0.4, scaleResponse: 1});
    Crafty.createLayer("Foreground", layerType, {z: 20, xResponse: 0.8, scaleResponse: 1});
    Crafty.createLayer("ActionLayer", layerType, {z: 25, xResponse: 1});

    // Define a UI layer that is completely static and sits above the other layers
    Crafty.createLayer("UI", "DOM", {
        xResponse: 0, yResponse:0, scaleResponse:0, z: 50
    });

    Crafty.scene('main', function() {


      // A player controlled box in the "normal" layer
      var player = Crafty.e("2D, ActionLayer, Color, Fourway, Mouse, Text")
          .attr({x: 200, y: 120, w: 50, h: 50, z: 30})
          .color("red")
          .fourway(200)
          .textFont({ size: '20px', weight: 'bold' })
          .text(function () { return "x=" + this._x; })
          .dynamicTextGeneration(true);
      
      // Scale the viewport up and down when clicking on the "player"
      var toggle = false;
      player.bind("Click", function(){
          if (toggle) {
            Crafty.viewport.scale(1.5);
          } else {
            Crafty.viewport.scale(1);
          }
          toggle = !toggle;
      });

      
      // Set up some repeating bars in the other layers
      // Note that the globalZ value determines which item is on the "top" for mouse clicks
      // not the z value of the individual layer -- do we want to change this?
      for (var i = -20; i < 20; i++){
        Crafty.e("Background, Bar, Collision, WiredHitBox").color("blue").attr({x: 100*i, y: 10, z: 30});
        Crafty.e("Midground, Bar, Collision, WiredHitBox").color("purple").attr({x: 100*i, y: 20, z: 30});
        Crafty.e("Foreground, Bar, Collision, WiredHitBox").color("yellow").attr({x: 100*i, y: 30, z: 10});

        // A hitbox not attached to a renderable entity should track the default layer
        Crafty.e("2D, Collision, WiredHitBox").debugStroke("green").attr({x: 100*i, y: 40, z: 100, h: 100, w: 31});
        Crafty.e("ActionLayer, Bar").color("brown").attr({x: 100*i, y: 40, z: 100});
        
      }

      // Some text that shows the viewport's current position, and sits in the UI layer
      Crafty.e("2D, UI, Text")
        .textColor("white")
        .textFont({size: '20px', family:'Arial'})
        .attr({x: 10, y: 130, w: 200})
        .bind("UpdateFrame", function(){
            this.text("Distance: " + Math.floor(Math.abs(Crafty.viewport.x)));
        });

      // Setup the viewport to smoothly follow the player object
      Crafty.viewport.clampToEntities = false;
      Crafty.viewport.follow(player);
      
      
    });

    Crafty.scene('main');
  };
