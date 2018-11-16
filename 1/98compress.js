
      function setVersion(ver) {
        var urlprefix = ver.options[ver.selectedIndex].value;
        var select = document.getElementById("files"), m;
        for (var optgr = select.firstChild; optgr; optgr = optgr.nextSibling)
          for (var opt = optgr.firstChild; opt; opt = opt.nextSibling) {
            if (opt.nodeName != "OPTION")
              continue;
            else if (m = opt.value.match(/^http:\/\/codemirror.net\/(.*)$/))
              opt.value = urlprefix + m[1];
            else if (m = opt.value.match(/http:\/\/marijnhaverbeke.nl\/git\/codemirror\?a=blob_plain;hb=[^;]+;f=(.*)$/))
              opt.value = urlprefix + m[1];
          }
       }
    