
    function createTest(title, numberOfTargets, params) {
      var testEl = document.createElement('article');
      var testZoneEl = document.createElement('div');
      var logsEl = document.createElement('div');
      var progressEl = document.createElement('input');
      var promiseEl = document.createElement('input');
      var h2El = document.createElement('h2');

      for (var i = 0; i < numberOfTargets; i++) {
        var el = document.createElement('div');
        el.classList.add('el');
        testZoneEl.appendChild(el);
      }

      h2El.innerHTML = title;
      testEl.appendChild(h2El);
      logsEl.classList.add('logs');
      logsEl.appendChild(progressEl);
      logsEl.appendChild(promiseEl);
      testEl.appendChild(logsEl);
      testEl.appendChild(testZoneEl);
      document.body.appendChild(testEl);

      params.targets = testZoneEl.querySelectorAll('div');
      params.translateX = '29vw';
      params.delay = 1000;
      params.begin = function() { testEl.classList.add('color-03') };
      params.update = function(a) { 
        testEl.classList.add('color-01');
        progressEl.value = a.progress + '%';
      };
      params.complete = function() { testEl.classList.add('color-05') };
      var animation = anime(params);
      animation.finished.then(function() {
        promiseEl.value = 'Promise resolved'
        console.log('Promise resolved');
      });
      testEl.onclick = function() {
        testEl.classList.add('color-01');
        testEl.classList.remove('color-03');
        testEl.classList.remove('color-05');
        animation.restart();
      }
    }

    createTest('Normal', 1, {});

    createTest('Reverse', 1, {
      direction: 'reverse'
    });

    createTest('Alternate', 1, {
      direction: 'alternate'
    });

    createTest('Normal 1 time', 1, {
      loop: 1
    });

    createTest('Reverse 1 time', 1, {
      direction: 'reverse',
      loop: 1
    });

    createTest('Alternate 1 time (equals 2)', 1, {
      direction: 'alternate',
      loop: 1
    });

    createTest('Normal 2 times', 1, {
      loop: 2
    });

    createTest('Reverse 2 times', 1, {
      direction: 'reverse',
      loop: 2
    });

    createTest('Alternate 2 times', 1, {
      direction: 'alternate',
      loop: 2
    });

    createTest('Normal 3 times', 1, {
      loop: 3
    });

    createTest('Reverse 3 times', 1, {
      direction: 'reverse',
      loop: 3
    });

    createTest('Alternate 3 times', 1, {
      direction: 'alternate',
      loop: 3
    });

    createTest('Normal true', 1, {
      loop: true
    });

    createTest('Reverse true', 1, {
      direction: 'reverse',
      loop: true
    });

    createTest('Alternate true', 1, {
      direction: 'alternate',
      loop: true
    });



  