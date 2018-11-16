
      addEventListener('DOMContentLoaded', function(){
        move('mac')
          .duration(1000)
          .set('opacity', 1)
          .add('left', 500)
          .end();
        
        move('mac-title')
          .sub('left', 400)
          .set('opacity', 1)
          .duration(1200)
          .delay(500)
          .end();

        move('mac-subtitle')
          .sub('left', 400)
          .set('opacity', 1)
          .duration(1200)
          .delay(500)
          .then()
            .move('purchase')
            .set('opacity', 1)
            .set('left', 200)
            .then()
              .set('color', '#00B7FF')
              .duration(1000)
              .pop()
            .pop()
          .end();
      }, false);
    