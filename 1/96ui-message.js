
    ! function() {
      var localDocument = document.currentScript.ownerDocument;
      var tmpl = localDocument.getElementById('tmpl');

      var MessageProto = Object.create(HTMLElement.prototype);

      MessageProto.createdCallback = function() {
        var root = this.createShadowRoot();
        root.appendChild(tmpl.content.cloneNode(true));
      };

      document.registerElement('ui-message', {
        prototype: MessageProto
      });
    }();
  