
      var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: {name: "idl",
               version: 1,
               singleLineStringErrors: false},
        lineNumbers: true,
        indentUnit: 4,
        matchBrackets: true
      });
    