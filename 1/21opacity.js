
  move('h1')
    .set('opacity', .5)
    .set('color', 'grey')
    .then()
      .set('opacity', .8)
      .set('color', 'black')
      .pop()
    .end();
