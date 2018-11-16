
        function setMessage(message) {
            document.getElementById('result').innerHTML = message;
        }

        function showSelected() {
          var selectElement = document.getElementById('multi');
          if (selectElement == null) {
            appendMessage("null!");
          }

          var options_array = selectElement.getElementsByTagName('option');
          var selected_cheese = "";
          for (var i = 0; i < options_array.length; i++) {
            if (options_array[i].selected) {
              selected_cheese = selected_cheese + options_array[i].label + " ";
            }
          }
          setMessage(selected_cheese);
        }
    