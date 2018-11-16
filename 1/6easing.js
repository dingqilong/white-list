
      move('#square')
        .x(500)
        .y(200)
        .ease('in-out')
        .then()
          .x(-500)
          .then()
            .y(-200)
            .duration('2s')
            .delay('.5s')
            .rotate(180)
            .pop()
          .pop()
        .end();
    