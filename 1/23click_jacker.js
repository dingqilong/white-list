
    var clickJacker;

    function setOpacity(opacity) {
      var matches = window.navigator.userAgent.match(/MSIE\s*(\d*)/);
      if (matches && matches.length > 1 && parseInt(matches[1]) <= 8) {
        clickJacker.style.filter = 'alpha(opacity=' + (opacity * 100) + ')';
      } else {
        clickJacker.style.opacity = opacity;
      }
    }

    function init() {
      clickJacker = document.getElementById('clickJacker');
      setOpacity(0);
    }
  