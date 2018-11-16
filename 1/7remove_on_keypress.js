
  function removeNode(node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }

  function log(msg) {
    document.getElementById('log').value += msg + '\n';
  }

  document.body.onkeyup = function() {
    log('keyup (body)');
  };

  document.getElementById('clear').onclick = function() {
    document.getElementById('log').value = '';
  };

  var target = document.getElementById('target');
  target.onkeydown = function() { log('keydown (target)'); };
  target.onkeypress = function(e) {
    e = e || window.event;
    var k = e.keyCode || e.which;
    if (k == 97) {
      log('a pressed; removing');
      removeNode(target.parentNode);
    }
  };
  target.onkeyup = function() { log('keyup (target)'); };
