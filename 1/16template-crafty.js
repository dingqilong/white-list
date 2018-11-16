
window.addEventListener('load', function() {
  // ADD YOUR TEST CODE HERE; Crafty init'd with {w: 320, h: 240}

  Crafty.e("2D, DOM, Color")
    .attr({ x: 10, y: 10, w: 100, h: 100 })
    .color('rgb(0,255,0)');

  signalBarrier("done");

}, false);
