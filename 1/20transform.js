
      move('#square')
        .to(500, 200)
        .rotate(180)
        .scale(.5)
        .set('background-color', '#888')
        .set('border-color', 'black')
        .duration('2s')
        .skew(50, -10)
        .then()
          .set('opacity', 0)
          .duration('0.3s')
          .scale(.1)
          .pop()
        .end(function(){
          var el = document.getElementById('square');
          el.style.webkitTransform = 'scale(.5)';
        });
    