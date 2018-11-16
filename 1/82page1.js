
  var match = document.location.search.match(/next=(.*)/);
  if (match && match.length == 2) {
    var next = decodeURIComponent(match[1]);
    var link = document.createElement('a');
    link.innerText = 'Next!';
    link.textContent = 'Next!';
    link.id = 'next';
    link.href = next + '?next=' + encodeURIComponent(
        'http://' + document.location.host +
        document.location.pathname.replace('page1.html', 'page3.html'));
    document.body.appendChild(link);
  }
