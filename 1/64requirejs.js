
      require(["../lib/codemirror", "../mode/htmlmixed/htmlmixed",
               "../addon/hint/show-hint", "../addon/hint/html-hint"], function(CodeMirror) {
        editor = CodeMirror(document.getElementById("code"), {
          mode: "text/html",
          extraKeys: {"Ctrl-Space": "autocomplete"},
          value: document.documentElement.innerHTML
        });
      });
    