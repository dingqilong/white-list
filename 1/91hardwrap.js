
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: "markdown",
  lineNumbers: true,
  extraKeys: {
    "Ctrl-Q": function(cm) { cm.wrapParagraph(cm.getCursor(), options); }
  }
});
var wait, options = {column: 60};
editor.on("change", function(cm, change) {
  clearTimeout(wait);
  wait = setTimeout(function() {
    console.log(cm.wrapParagraphsInRange(change.from, CodeMirror.changeEnd(change), options));
  }, 200);
});
