
  function displayEvent(event) {
    var keys = ['x', 'y', 'clientX', 'clientY', 'pageX', 'pageY', 'screenX', 'screenY', 'shiftKey', 'ctrlKey'];
    var message = "<ul>";
    for (var i = 0; i < keys.length; i++) {
      message += "<li>" + keys[i] + ": <span id='" + keys[i] + "'>" + event[keys[i]] + "</span></li>";
    }
    message += "</ul>";
    document.getElementById('result').innerHTML = message;
  }
  