
      window.ERRORS = [];

      window.onerror = function(e) {
        window.ERRORS.push(e);
      };
    