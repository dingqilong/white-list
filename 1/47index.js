
      var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: {name: "octave",
               version: 2,
               singleLineStringErrors: false},
        lineNumbers: true,
        indentUnit: 4,
        tabMode: "shift",
        matchBrackets: true
      });
    