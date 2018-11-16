
  var startTime = document.getElementById('time-marker');

  var ie = document.all;
  var nn6 = document.getElementById && !document.all;

  var isDrag = false;
  var x, y, tx, ty;
  var dragEl;

  function movemouse(e) {
    if (isDrag) {
      var dy = (nn6 ? e.clientY - y : event.clientY - y);
      if (dy % 12 == 0) {
        dragEl.style.top = ty + dy;
      }
      return false;
    }
  }

  function selectmouse(e) {
    var srcEl = nn6 ? e.target : event.srcElement;
    var topElement = nn6 ? "HTML" : "BODY";

    while (srcEl.tagName != topElement && srcEl != startTime) {
      srcEl = nn6 ? srcEl.parentNode : srcEl.parentElement;
    }

    if (srcEl === startTime) {
      isDrag = true;
      dragEl = srcEl;
      tx = parseInt(dragEl.style.left + 0);
      ty = parseInt(dragEl.style.top + 0);
      x = nn6 ? e.clientX : event.clientX;
      y = nn6 ? e.clientY : event.clientY;
      document.onmousemove = movemouse;
      return false;
    }
  }

  document.onmousedown = selectmouse;
  document.onmouseup = function() { isDrag = false; };
