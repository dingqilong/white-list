
      var next = 0;

      function addVisibleBox() {
        var box = document.createElement('DIV');
        box.id = 'box' + next++;
        box.className = 'redbox';
        box.style.width = '150px';
        box.style.height = '150px';
        box.style.backgroundColor = 'red';
        box.style.border = '1px solid black';
        box.style.margin = '5px';
        box.style.visibility = 'visible'

        window.setTimeout(function() {
          document.body.appendChild(box);
        }, 1000);
      }

      function addHiddenBox() {
        var box = document.createElement('DIV');
        box.id = 'box' + next++;
        box.className = 'redbox';
        box.style.width = '150px';
        box.style.height = '150px';
        box.style.backgroundColor = 'red';
        box.style.border = '1px solid black';
        box.style.margin = '5px';
        box.style.visibility = 'hidden';

        window.setTimeout(function() {
          document.body.appendChild(box);
        }, 1000);
      }
    