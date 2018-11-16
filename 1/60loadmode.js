
CodeMirror.modeURL = "../mode/%N/%N.js";
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true
});
var modeInput = document.getElementById("mode");
CodeMirror.on(modeInput, "keypress", function(e) {
  if (e.keyCode == 13) change();
});
function change() {
   editor.setOption("mode", modeInput.value);
   CodeMirror.autoLoadMode(editor, modeInput.value);
}
