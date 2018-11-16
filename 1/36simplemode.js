
var sc = document.getElementById("modecode");
var code = document.getElementById("code");
var editor = CodeMirror(code, {
  value: (sc.textContent || sc.innerText || sc.innerHTML),
  mode: "simplemode"
});
