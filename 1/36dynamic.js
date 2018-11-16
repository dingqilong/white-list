
      var next = 0;

      function addMore() {
        var box = document.createElement('DIV');
        box.id = 'box' + next++;
        box.className = 'redbox';
        box.style.width = '150px';
        box.style.height = '150px';
        box.style.backgroundColor = 'red';
        box.style.border = '1px solid black';
        box.style.margin = '5px';

        window.setTimeout(function() {
          document.body.appendChild(box);
        }, 1000);
      }

      function reveal() {
        var elem = document.getElementById('revealed');
        window.setTimeout(function() {
          elem.style.display = '';
        }, 1000);
      }
    