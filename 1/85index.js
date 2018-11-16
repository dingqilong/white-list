
      var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: "text/x-dylan",
        lineNumbers: true,
        matchBrackets: true,
        continueComments: "Enter",
        extraKeys: {"Ctrl-Q": "toggleComment"},
        tabMode: "indent",
        indentUnit: 2
      });
    