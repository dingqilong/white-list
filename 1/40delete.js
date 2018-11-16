
document.getElementById('cancel').onsubmit = function (event) {
  event = event || window.event;
  var result = (prompt("Enter your username to confirm the deletion\n(it's \"{{@root.user.name}}\" by the way).\n\nWe'll miss you :(") || '').toLowerCase().trim();
  if (!result || result !== '{{@root.user.name}}'.toLowerCase()) {
    if (event.preventDefault) event.preventDefault();
    return false;
  }
  document.getElementById('confirm').value = result;
};
