
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: "text/html",
  lineNumbers: true,
  extraKeys: {"Alt-F": "findPersistent"}
});
