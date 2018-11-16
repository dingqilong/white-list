

      function $(selector) {
        return document.querySelectorAll(selector)[0];
      }

      function play(example, fn) {
        $('#example-' + example + ' .play').addEventListener('click', function(e){
          e.preventDefault();
          fn();
        }, false);
      }

      // example 1
      play(1, function(){
        move('#example-1 .box')
          .set('margin-left', 200)
          .end();
      });

      // example 2
      play(2, function(){
        move('#example-2 .box')
          .add('margin-left', 200)
          .end();
      });

      // example 3
      play(3, function(){
        move('#example-3 .box')
          .sub('margin-left', 100)
          .end();
      });

      // example 4
      var e4 = move('#example-4 .box');
      play(4, function(){
        e4.rotate(140).end();
      });

      // example 5
      play(5, function(){
        move('#example-5 .box')
          .set('background-color', 'blue')
          .duration(2000)
          .end();
      });

      // example 6
      play(6, function(){
        move('#example-6 .box')
          .translate(300, 80)
          .end();
      });

      // example 7
      play(7, function(){
        move('#example-7 .box')
          .x(300)
          .y(20)
          .end();
      });

      // example 8
      play(8, function(){
        move('#example-8 .box')
          .x(300)
          .skew(50)
          .set('height', 20)
          .end();
      });

      // example 9
      play(9, function(){
        move('#example-9 .box')
          .scale(3)
          .end();
      });

      // example 10
      play(10, function(){
        move('#example-10 .box1').x(400).end();
        move('#example-10 .box2').ease('in').x(400).end();
        move('#example-10 .box3').ease('out').x(400).end();
        move('#example-10 .box4').ease('in-out').x(400).end();
        move('#example-10 .box5').ease('snap').x(400).end();
        move('#example-10 .box6').ease('cubic-bezier(0,1,1,0)').x(400).end();

        setTimeout(function(){
          move('#example-10 .box1').x(0).end();
          move('#example-10 .box2').x(0).end();
          move('#example-10 .box3').x(0).end();
          move('#example-10 .box4').x(0).end();
          move('#example-10 .box5').x(0).end();
          move('#example-10 .box6').x(0).end();
        }, 1200);
      });

      play(11, function(){
        move('#example-11 .box')
          .set('background-color', 'red')
          .duration(1000)
          .end(function(){
            move('#example-11 .box')
              .set('background-color', 'white')
              .end();
          });
      });

      // example 12
      play(12, function(){
        move('#example-12 .box')
          .set('background-color', 'blue')
          .delay('2s')
          .end();
      });

      // example 13
      play(13, function(){
        var moveBack = move('#example-13 .box')
          .set('background-color', 'white')
          .x(0);

        move('#example-13 .box')
          .set('background-color', 'red')
          .x(500)
          .then(moveBack)
          .end();

        move('#example-13 .box2')
          .set('background-color', 'red')
          .x(500)
          .scale(.5)
          .rotate(60)
            .then()
              .rotate(30)
              .scale(1.5)
              .set('border-radius', 5)
              .set('background-color', 'white')
              .then()
                .set('opacity', 0)
                .pop()
              .pop()
          .end();
      });
    