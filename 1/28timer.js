
    var localDocument = document.currentScript.ownerDocument;
    var timer = localDocument.getElementById('timer');

    var timerId = setInterval(function() {
      timer.innerHTML++;
    }, 1000);
  