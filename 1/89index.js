
      var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        tabMode: "indent",
		theme: "night",
        lineNumbers: true,
        indentUnit: 2,
        scrollPastEnd: true,
        mode: "text/x-tcl"
      });
    