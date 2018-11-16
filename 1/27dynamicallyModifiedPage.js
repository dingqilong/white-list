
      
      var parentNode;
      var elementId;
        
      function timedRemove()
      {
        var t = setTimeout('removeElement()', 500);
        t = setTimeout('insertElement()', 2000);
      }

      function removeElement()
      {
        var element = document.getElementById('element-to-remove');
        elementId = element.id;
        parentNode = element.parentNode;
        parentNode.removeChild(element);
      }

      function insertElement()
      {
        var newElement = document.createElement('p');
        newElement.setAttribute('id', elementId);
        newElement.innerHTML = 'new element';
        parentNode.appendChild(newElement);
      }
    