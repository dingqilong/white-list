
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  highlightSelectionMatches: {showToken: /\w/}
});
