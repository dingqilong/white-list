
var links = document.getElementById('sidebar').getElementsByTagName('a');
[].forEach.call(links, function (el) {
  if (window.location.pathname.indexOf(el.pathname) !== -1) {
    el.className += ' selected';
  }
});
