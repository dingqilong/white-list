
      var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-cobol",
        theme : "twilight",
        styleActiveLine: true,
        showCursorWhenSelecting : true,  
      });
      function selectTheme() {
        var themeInput = document.getElementById("selectTheme");
        var theme = themeInput.options[themeInput.selectedIndex].innerHTML;
        editor.setOption("theme", theme);
      }
      function selectFontsize() {
        var fontSizeInput = document.getElementById("selectFontSize");
        var fontSize = fontSizeInput.options[fontSizeInput.selectedIndex].innerHTML;
        editor.getWrapperElement().style["font-size"] = fontSize;
        editor.refresh();
      }
      function selectReadOnly() {
        editor.setOption("readOnly", document.getElementById("checkBoxReadOnly").checked);
      }
      function tabToIndentSpace() {
        if (document.getElementById("id_tabToIndentSpace").checked) {
            editor.setOption("extraKeys", {Tab: function(cm) { cm.replaceSelection("    ", "end"); }});
        } else {
            editor.setOption("extraKeys", {Tab: function(cm) { cm.replaceSelection("    ", "end"); }});
        }
      }
    