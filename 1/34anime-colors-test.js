

    var colorTestEls = document.querySelectorAll('.color-test');

    function createTest(el) {
      var testHtml = el.innerHTML;
      var testValues = testHtml.split('<br>▾<br>');
      var colorEl = document.createElement('div');
      colorEl.classList.add('color-el');
      el.appendChild(colorEl);
      anime({
        targets: colorEl,
        backgroundColor: [testValues[0], testValues[1]],
        scale: [.97, .75],
        direction: 'alternate',
        easing: 'easeInOutSine',
        duration: 4000,
        loop: true
      });
    }

    for (var i = 0; i < colorTestEls.length; i++) createTest(colorTestEls[i]);

  