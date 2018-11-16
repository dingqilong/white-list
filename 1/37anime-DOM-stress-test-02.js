

    const wrapperEl = document.body;
    const numberOfEls = 280;
    const duration = 3000;
    const delay = duration / numberOfEls;
    const radius = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
    const distance = radius / 4 <= 150 ? 150 : radius / 3; 

    let tl = anime.timeline({
      duration: delay,
      complete: function() { tl.restart(); }
    });

    function createEl(i) {
      let el = document.createElement('div');
      const hue = Math.round(360 / numberOfEls * i);
      const angle = i;
      el.classList.add('el');
      el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
      tl.add({
        begin: function() {
          var randomDistance = anime.random(distance - 50, distance + 50);
          anime({
            targets: el,
            // backgroundColor: ['#fff', '#000'],
            translateX: [0, Math.sin(angle) * randomDistance],
            translateY: [0,Math.cos(angle) * randomDistance],
            scale: [
              {value: [0, anime.random(5, 10) * .1], easing: 'easeOutBack'},
              {value: 0, easing: 'easeInBack'},
            ],
            easing: 'easeInOutSine',
            direction: 'reverse',
            duration: duration
          });
        }
      });
      wrapperEl.appendChild(el);
    };

    for (let i = 0; i < numberOfEls; i++) createEl(i);

  