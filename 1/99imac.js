
      addEventListener('DOMContentLoaded', function(){
        move('mac')
          .duration(1000)
          .set('opacity', 1)
          .add('left', 500)
          .end();

        move('mac-title')
          .add('top', 100)
          .set('opacity', 1)
          .duration(1200)
          .delay(500)
          .end();
        
        move('mac-subtitle')
          .add('left', 100)
          .set('opacity', 1)
          .duration('1.2s')
          .delay('1.5s')
          .end();
      }, false);
    