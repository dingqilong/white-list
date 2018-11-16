
        function setInnerText(id, value) {
          document.getElementById(id).innerHTML = '<p>' + value + '</p>';
        }

        function displayPrompt() {
          setInnerText('text', prompt('Enter something'));
        }

        function displayPromptWithDefault() {
          setInnerText('text', prompt('Enter something', 'This is a default value'));
        }

        function displayTwoPrompts() {
          setInnerText('text1', prompt('First'));
          setInnerText('text2', prompt('Second'));
        }

        function slowAlert() {
          window.setTimeout(function() {
            alert('Slow');
          }, 200);
        }
    