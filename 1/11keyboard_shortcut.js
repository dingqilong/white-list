
  var colors = {};
  colors[0x001] = 'red';
  colors[0x010] = 'green';
  colors[0x011] = 'yellow';
  colors[0x100] = 'lightblue';
  colors[0x101] = 'lightgreen';
  colors[0x110] = 'silver';
  colors[0x111] = 'magenta';

  document.onkeydown = function(e) {
    if (e.keyCode != 49) return;
    var mask = 0;
    if (e.ctrlKey) mask |= 0x001;
    if (e.shiftKey) mask |= 0x010;
    if (e.altKey) mask |= 0x100;

    console.log(mask);
    if (mask) {
      document.body.style.backgroundColor = colors[mask];
    }

    e.preventDefault();
    e.stopPropagation();
    return false;
  };
