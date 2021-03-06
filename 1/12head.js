
function voteSync(outputElem) {
  var xhr = new XMLHttpRequest(); // (1)

  xhr.open('GET', '/files/tutorial/ajax/xhr/vote.php', false);
  xhr.send(null);   // (2)

  outputElem.innerHTML = xhr.responseText;  // (3)
}

function vote(outputElem) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', '/files/tutorial/ajax/xhr/vote.php', true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;
    outputElem.innerHTML = xhr.responseText;
  }

  xhr.send(null);
}
