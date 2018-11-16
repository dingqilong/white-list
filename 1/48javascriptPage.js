
        var seen = {};

        function updateContent(input) {
            document.getElementById('resultParagraph').innerHTML = input.value;
        }

        function displayMessage(message) {
            document.getElementById('resultParagraph').innerHTML = message;
        }

        function appendMessage(message) {
            document.getElementById('resultParagraph').innerHTML += message + " ";
        }

        function register(message) {
          if (!seen[message]) {
            appendMessage(message);
            seen[message] = true;
          }
        }

        function delayedShowHide(delay, show) {
          var blackBox = document.getElementById('clickToHide');
          window.setTimeout(function() {
            blackBox.style.display = show ? '' : 'none';
          }, delay);
        }
    