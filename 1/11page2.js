
  var match = document.location.search.match(/next=(.*)/);
  var next = document.referrer || '';
  if (match && match.length == 2) {
    next = decodeURIComponent(match[1]);
  }

  if (next) {
    var link = document.createElement('a');
    link.innerText = 'Next!';
    link.textContent = 'Next!';
    link.id = 'next';
    link.href = next;
    document.body.appendChild(link);
  }
