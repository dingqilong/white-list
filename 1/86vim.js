
      CodeMirror.commands.save = function(){ alert("Saving"); };
      var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        mode: "text/x-csrc",
        vimMode: true,
        showCursorWhenSelecting: true
      });
      var editor2 = CodeMirror.fromTextArea(document.getElementById("code2"), {
        lineNumbers: true,
        mode: "text/x-csrc",
        vimMode: true,
        showCursorWhenSelecting: true
      });
    