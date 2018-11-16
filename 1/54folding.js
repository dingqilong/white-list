
/*
 * Demonstration of code folding
 */
window.onload = function() {
  var te = document.getElementById("code");
  var sc = document.getElementById("script");
  te.value = (sc.textContent || sc.innerText || sc.innerHTML).replace(/^\s*/, "");
  sc.innerHTML = "";
  var te_html = document.getElementById("code-html");
  te_html.value = document.documentElement.innerHTML;

  window.editor = CodeMirror.fromTextArea(te, {
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
  });
  editor.foldCode(CodeMirror.Pos(11, 0));

  window.editor_html = CodeMirror.fromTextArea(te_html, {
    mode: "text/html",
    lineNumbers: true,
    lineWrapping: true,
    extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
  });
  editor_html.foldCode(CodeMirror.Pos(0, 0));
  editor_html.foldCode(CodeMirror.Pos(21, 0));
};
  