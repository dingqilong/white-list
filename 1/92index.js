
    function getCoords(elem) {
      var box = elem.getBoundingClientRect();

      var body = document.body;
      var docEl = document.documentElement;

      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

      var clientTop = docEl.clientTop || body.clientTop || 0;
      var clientLeft = docEl.clientLeft || body.clientLeft || 0;

      var top = box.top + scrollTop - clientTop;
      var left = box.left + scrollLeft - clientLeft;

      return {
        top: top,
        left: left
      };
    }

    function showNote(anchor, position, html) {

      var note = document.createElement('div');
      note.className = "note";
      note.innerHTML = html;
      document.body.appendChild(note);

      positionAt(anchor, position, note);
    }

    /**
     * Позиционирует элемент elem относительно элемента anchor, как указано в
     * в position.
     *
     * @param {Node} anchor     Элемент-якорь, относительно которого задана позиция
     * @param {string} position вне элемента top-out/right-out/bottom-out, внутри элемента *-in
     * @param {Node} elem       Элемент, который будет позиционирован
     *
     * Оба элемента elem && anchor должны быть видимы в документе.
     */
    function positionAt(anchor, position, elem) {

      var anchorCoords = getCoords(anchor);

      switch (position) {
        case "top-out":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
          break;

        case "right-out":
          elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
          elem.style.top = anchorCoords.top + "px";
          break;

        case "bottom-out":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
          break;

        case "top-in":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + "px";
          break;

        case "right-in":
          elem.style.width = '150px';
          elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
          elem.style.top = anchorCoords.top + "px";
          break;

        case "bottom-in":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
          break;
      }

    }


    var blockquote = document.querySelector('blockquote');

    showNote(blockquote, "top-in", "заметка top-in");
    showNote(blockquote, "top-out", "заметка top-out");
    showNote(blockquote, "right-out", "заметка right-out");
    showNote(blockquote, "bottom-in", "заметка bottom-in");
  