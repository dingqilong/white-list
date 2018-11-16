

  var noOffset = anime.timeline({
    autoplay: true
  });

  noOffset
    .add({
      targets: '.no-offset',
      translateX: -100,
      translateY: -100,
      scale: 2,
      background: '#FF1461',
      begin: function() { console.log('noOffset animation 1 began')},
      complete: function() { console.log('noOffset animation 1 completed')}
    })
    .add({
      targets: '.no-offset',
      translateX: -100,
      translateY: 100,
      scale: 3,
      background: '#18FF92',
      begin: function() { console.log('noOffset animation 2 began')},
      complete: function() { console.log('noOffset animation 2 completed')}
    })
    .add({
      targets: '.no-offset',
      translateX: 100,
      translateY: 100,
      rotate: 120,
      scale: 4,
      background: '#5A87FF',
      begin: function() { console.log('noOffset animation 3 began')},
      complete: function() { console.log('noOffset animation 3 completed')}
    })
    .add({
      targets: '.no-offset',
      translateX: 100,
      translateY: -100,
      scale: 5,
      background: '#FBF38C',
      begin: function() { console.log('noOffset animation 4 began')},
      complete: function() { console.log('noOffset animation 4 completed')}
    })
    .add({
      targets: '.no-offset',
      translateX: 100,
      translateY: -100,
      scale: '+=8',
      background: '#FBF38C',
      begin: function() { console.log('noOffset animation 5 began')},
      complete: function() { console.log('noOffset animation 5 completed')}
    });

  var relativeOffset = anime.timeline({
    autoplay: true
  });

  relativeOffset
    .add({
      targets: '.relative-offset',
      translateX: -100,
      translateY: -100,
      scale: 2,
      background: '#FF1461',
    })
    .add({
      targets: '.relative-offset',
      translateX: -100,
      translateY: 100,
      scale: 3,
      background: '#18FF92',
      offset: '-=500'
    })
    .add({
      targets: '.relative-offset',
      translateX: 100,
      translateY: 100,
      rotate: 120,
      scale: 4,
      background: '#5A87FF',
      offset: '-=500'
    })
    .add({
      targets: '.relative-offset',
      translateX: 100,
      translateY: -100,
      scale: 5,
      background: '#FBF38C',
      offset: '+=500'
    })
    .add({
      targets: '.relative-offset',
      translateX: 100,
      translateY: -100,
      scale: '+=8',
      background: '#FBF38C',
      offset: '+=500'
    });

  var absoluteOffset = anime.timeline({
    autoplay: true
  });

  absoluteOffset
    .add({
      targets: '.absolute-offset',
      translateX: -100,
      translateY: -100,
      scale: 2,
      background: '#FF1461',
      offset: 0
    })
    .add({
      targets: '.absolute-offset',
      translateX: -100,
      translateY: 100,
      scale: 3,
      background: '#18FF92',
      offset: 1000
    })
    .add({
      targets: '.absolute-offset',
      translateX: 100,
      translateY: 100,
      rotate: 120,
      scale: 4,
      background: '#5A87FF',
      offset: 2000
    })
    .add({
      targets: '.absolute-offset',
      translateX: 100,
      translateY: -100,
      scale: 5,
      background: '#FBF38C',
      offset: 3000
    })
    .add({
      targets: '.absolute-offset',
      translateX: 100,
      translateY: -100,
      scale: '+=8',
      background: '#FBF38C',
      offset: 4000
    });

  var controlsProgressEl = document.querySelector('.controls .progress');

  var multipleTargets = anime.timeline({
    autoplay: false,
    direction: 'reverse',
    update: function(anim) {
      controlsProgressEl.value = anim.progress;
    },
    begin: function(anim) {
      console.log('multiple begin');
    },
    complete: function(anim) {
      console.log('multiple complete');
    }
  });

  document.querySelector('.controls .play').onclick = multipleTargets.play;
  document.querySelector('.controls .pause').onclick = multipleTargets.pause;
  document.querySelector('.controls .restart').onclick = multipleTargets.restart;

  multipleTargets
    .add({
      targets: '.multiple-targets-01',
      translateY: -100,
      scale: 8,
      background: '#FF1461',
      duration: 500,
      begin: function() { console.log('multipleTargets animation 1 began')},
      complete: function() { console.log('multipleTargets animation 1 completed')}
    })
    .add({
      targets: '.multiple-targets-02',
      translateY: -100,
      scale: 8,
      background: '#18FF92',
      duration: 500,
      begin: function() { console.log('multipleTargets animation 2 began')},
      complete: function() { console.log('multipleTargets animation 2 completed')}
    })
    .add({
      targets: '.multiple-targets-03',
      translateY: -100,
      scale: 8,
      background: '#5A87FF',
      duration: 500,
      begin: function() { console.log('multipleTargets animation 3 began')},
      complete: function() { console.log('multipleTargets animation 3 completed')}
    })
    .add({
      targets: '.multiple-targets-04',
      translateY: -100,
      scale: 8,
      background: '#FBF38C',
      duration: 500,
      begin: function() { console.log('multipleTargets animation 4 began')},
      complete: function() { console.log('multipleTargets animation 4 completed')}
    })
    .add({
      targets: ['.multiple-targets-01', '.multiple-targets-02', '.multiple-targets-03', '.multiple-targets-04'],
      translateY: -100,
      scale: 13,
      background: '#FBF38C',
      duration: 1000,
      begin: function() { console.log('multipleTargets animation 5 began')},
      complete: function() { console.log('multipleTargets animation 5 completed')}
    });

    controlsProgressEl.addEventListener('input', function() {
      multipleTargets.seek(multipleTargets.duration * (controlsProgressEl.value / 100));
    });

  