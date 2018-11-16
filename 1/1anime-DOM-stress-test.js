

    const wrapperEl = document.body;
    const numberOfEls = 500;
    const duration = 2000;
    const delay = duration / numberOfEls;
    const radius = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
    const distance = (radius / 4 <= 150 ? 150 : radius) + 100;

    let tl = anime.timeline({
      duration: delay,
      complete: function() { tl.restart(); }
    });

    function createEl(i) {
      let el = document.createElement('div');
      const hue = Math.round(360 / numberOfEls * i);
      // const angle = Math.round(360 / numberOfEls * i * 5);
      var angle = Math.random() * Math.PI * 2;
      el.classList.add('el');
      el.style.color = 'hsl(' + hue + ', 40%, 60%)';
      // el.style.transform = 'scale(0)';
      el.style.zIndex = numberOfEls - i;
      tl.add({
        begin: function() {
          anime({
            targets: el,
            translateX: ['0px', Math.sin(angle) * distance + 'px'],
            translateY: ['0px', Math.cos(angle) * distance + 'px'],
            // scale: [0, 32],
            // scale: [
            //   {value: [0, 1], duration: duration / 2, easing: 'easeOutBack'},
            //   {value: 0, duration: duration / 2, easing: 'easeInBack'}
            // ],
            easing: 'easeInOutSine',
            duration: duration
          });
        }
      });
      wrapperEl.appendChild(el);
    };

    for (let i = 0; i < numberOfEls; i++) createEl(i);

  