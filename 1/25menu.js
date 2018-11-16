
    function Menu(options) {
      var elem = options.elem;

      function toggle() {
        elem.classList.toggle('menu_open');
      }

      elem.onclick = function(event) {
        console.log(event);
        console.log(this == elem);
        toggle();
      }

      this.toggle = toggle;
    }

    var menu = new Menu({
      elem: document.querySelector('#sweeties')
    });

    setInterval(function() {
      menu.toggle();
    }, 3000)
  