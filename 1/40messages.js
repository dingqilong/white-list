
  var messages = [];
  window.addEventListener('message', function(e) {
    var message = JSON.stringify(e.data);
    messages.push(message);

    var pre = document.createElement('pre');
    pre.style.margin = 0;
    pre.style.padding = 0;
    pre.textContent = message;

    document.body.appendChild(pre);
  }, true);
