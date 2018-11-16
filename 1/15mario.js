
      var ground = move('#ground').animate('bgchange', {
        duration: '4s',
        'iteration-count': 'infinite'
      }).end();

      addEventListener('keydown', function(e){
        var player = move('#player')
          .duration(300)
          .ease('out');

        switch (e.keyCode) {
          // up
          case 38:
            player
              .add('bottom', 100)
              .duration(200)
              .then()
                .sub('bottom', 100)
                .pop()
              .end();
            break;
          // left
          case 37:
            player.sub('left', 100).end();
            break;
          // right
          case 39:
            player.add('left', 100).end();
            break;
        }
      }, false);
    