
    var state = document.getElementById('state')
    setInterval(function () {
      state.className = navigator.onLine ? 'online' : 'offline';
      state.innerHTML = navigator.onLine ? 'online' : 'offline';
    }, 250);
  