
      var Browser = Class.create();
      Browser.prototype = {
        initialize: function(element, name, value, options) {
          this.element = $(element);
          this.name    = name;
          this.value   = value;
          this.history = [];
          Object.extend(this, options || {});
          this.reset();
        },
        
        reset: function() {
          this.go(this.name, this.value);
        },
        
        refresh: function() {
          var children = $A(this.element.childNodes),
              history  = this.history.toArray(),
              elements = history.slice(-3).pluck('element');
                  
          children.each(function(element) {
            if (element && !elements.include(element))
              this.element.removeChild(element);
          }.bind(this));
          
          children = $A(this.element.childNodes);
          
          elements.each(function(element, index) {
            Element.removeClassName(element, 'active');
            var child = children[index];
            if (!child)
              this.element.appendChild(element);
            else if (!element.parentNode)
              this.element.insertBefore(element, child);
          }.bind(this));
          
          this.setTitle();
          this.setValue();
        },
        
        setTitle: function() {
          if (this.titleElement)
            this.titleElement.innerHTML =
              this.history.pluck('name').invoke('escapeHTML').join('.');
        },
        
        setValue: function() {
          if (this.valueElement)
            this.valueElement.innerHTML = 
              this.currentValue().escapeHTML() + '&nbsp;';
        },
        
        currentValue: function() {
          try {
            return Object.inspect(this.current());
          } catch (e) {
            return '(Internal Function)';
          }
        },
        
        current: function() {
          return this.history.last().value;
        },
        
        go: function(name, value) {
          var from = this.history.last();
          this.history.push(new Inspector(this, name, value));
          this.refresh();
          if (from) 
            Element.addClassName(from.element, 'active');
        }
      }
      
      var Inspector = Class.create();
      Inspector.prototype = {
        initialize: function(browser, name, value) {
          this.browser = browser;
          this.name    = name;
          this.value   = value;
          this.id      = 'inspector_' + new Date().getTime();
          this.history = this.browser.history.toArray();
          this.history.push(this);
          this.createElement();
          this.populate();
        },
        
        properties: function() {
          var properties = [];
          for (var property in this.value)
            properties.push(property);
          properties.sort();
          return properties;
        },
        
        createElement: function() {
          var element = document.createElement('div');
          element.className = 'inspector';
          element.id = this.id;
          this.element = element;
          
          var title = document.createElement('h2');
          title.innerHTML = this.name.toString().escapeHTML();
          this.titleElement = title;
          
          var list = document.createElement('ul');
          this.listElement = list;
          
          element.appendChild(title);
          element.appendChild(list);          
        },
        
        populate: function() {
          this.properties().each(function(property) {
            var li = document.createElement('li');
            li.innerHTML = property.toString().escapeHTML();
            li.onclick   = this.select.bind(this, li);
            li._property = property;
            this.listElement.appendChild(li);
          }.bind(this));
        },
        
        select: function(element) {
          this.unselect();
          Element.addClassName(element, 'selected');
          this.selectedProperty = element;
          this.browser.history = this.history.toArray();
          this.browser.go(element._property, this.value[element._property]);
        },
        
        unselect: function() {
          if (this.selectedProperty)
            Element.removeClassName(this.selectedProperty, 'selected');
          this.selectedProperty = null;
        }
      }
    