
  var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    matchBrackets: true,
    mode: {
      name: "verilog",
      noIndentKeywords: ["package"]
    }
  });
