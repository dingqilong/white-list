
window.addEventListener('load', function() {
  // ADD YOUR TEST CODE HERE; Crafty init'd with {w: 320, h: 240}

  // green floor
  Crafty.e("2D, DOM, Color, ground")
    .attr({ x: 0, y: 239, w: 320, h: 1 })
    .color('rgb(0,255,0)');

  // green platform
  Crafty.e("2D, DOM, Color, ground")
    .attr({ x: 250, y: 120, w: 60, h: 1 })
    .color('rgb(0,255,0)');

  // blue player
  var landedCount = 0;
  Crafty.e("2D, DOM, Color, Gravity, Twoway, Button, Draggable")
    .attr({ x: 265, y: 140, w: 30, h: 30 })
    .color('rgb(0,0,255)')
    .gravityConst(1 * 50 * 50)
    .twoway(5 * 50,17 * 50)
    .gravity("ground")
    .bind("StartDrag", function() {
      this.antigravity();
    })
    .bind("StopDrag", function() {
      this.gravity();
    })
    .bind("LandedOnGround", function(ground) {
      landedCount++;
      signalBarrier("landed" + landedCount);
    });

}, false);
