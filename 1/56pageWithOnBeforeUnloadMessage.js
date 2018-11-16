
      function onBeforeUnloadHandler() {
        return "This is for WebDriver with onbeforeunload event handler.";
      }
      window.onbeforeunload = onBeforeUnloadHandler;
    