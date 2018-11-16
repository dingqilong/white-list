
    ! function() {
      var localDocument = document.currentScript.ownerDocument;
      var tmpl = localDocument.getElementById('tmpl');

      var SliderProto = Object.create(HTMLElement.prototype);

      SliderProto.createdCallback = function() {
        var root = this.createShadowRoot();
        root.appendChild(tmpl.content.cloneNode(true));

        this.$slider = $(root.getElementById('slider'));

        var self = this;

        this.$slider.slider({
          min: +this.getAttribute('min') || 0,
          max: +this.getAttribute('max') || 100,
          value: this.getAttribute('value') || 0,
          slide: function() {
            var event = new CustomEvent("slide", {
              detail: {
                value: self.$slider.slider("option", "value")
              },
              bubbles: true
            });
            self.dispatchEvent(event);
          }
        });
      };


      document.registerElement('ui-slider', {
        prototype: SliderProto
      });
    }();
  