
    anime({
      targets: '.duration-0',
      translateX: 100,
      duration: 0,
      begin: function() {console.log('duration-0 begin') },
      update: function() {console.log('duration-0 update') },
      complete: function() {console.log('duration-0 complte') }
    });
    var seek0 = anime({
      targets: '.seek-0',
      translateX: [100, 0],
      autoplay: false,
      begin: function() {console.log('seek-0 begin') },
      update: function() {console.log('seek-0 update') },
      complete: function() {console.log('seek-0 complte') }
    });

    seek0.seek(0);
  