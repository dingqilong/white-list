
      var modelicaEditor = CodeMirror.fromTextArea(document.getElementById("modelica"), {
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-modelica"
      });
      var mac = CodeMirror.keyMap.default == CodeMirror.keyMap.macDefault;
      CodeMirror.keyMap.default[(mac ? "Cmd" : "Ctrl") + "-Space"] = "autocomplete";
    