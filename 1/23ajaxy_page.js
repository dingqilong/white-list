
  var butter = document.getElementById('update_butter');

  var textProperty = butter['innerText'] ? 'innerText' : 'textContent';

  var listeners = [];
  function registerListener(fn) {
    listeners.push(fn);
  }

  function updateDom() {
    butter.style.display = 'block';
    butter[textProperty] = 'Updating';
    disableForm();
    tick();
  }

  function disableForm() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0, input; input = inputs[i]; ++i) {
      input.disabled = true;
    }
  }

  function enableForm() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0, input; input = inputs[i]; ++i) {
      input.disabled = false;
    }
  }

  function tick() {
    var length = butter[textProperty].substring('Updating'.length).length;
    if (length != 10) {
      butter[textProperty] += '.';
      window.setTimeout(tick, 500);
    } else {
      enableForm();
      var div = document.createElement('div');
      var colors = document.forms[0].color;
      for (var i = 0, color; color = colors[i]; ++i) {
        if (color.checked) {
          div.style.backgroundColor = color.value;
          break;
        }
      }
      div[textProperty] = document.forms[0].typer.value;
      div.className = 'label';
      document.forms[0].typer.value = '';
      document.body.appendChild(div);

      butter[textProperty] = 'Done!';

      window.setTimeout(function() {
        while (listeners.length) {
          try {
            listeners.shift()(div[textProperty]);
          } catch (e) {
            butter[textProperty] = "Exception seen: " + e;
          }
        }
      }, 500);
    }
  }
