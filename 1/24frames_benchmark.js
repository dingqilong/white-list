
  var start;
  var dom;

  function run() {
    if (dom) {
      dom.parentNode.removeChild(dom);
    }

    dom = document.createElement('div');
    var result = document.createElement('div');
    dom.appendChild(result);
    document.body.appendChild(dom);

    start = Date.now();

    for (var i = 0; i < 100; i++) {
      var iframe = document.createElement('iframe');
      iframe.style.width = '200px';
      iframe.style.height = '30px';
      dom.appendChild(iframe);
      var content = iframe.contentWindow.document.createTextNode('hello, world');
      iframe.contentWindow.document.body.appendChild(content);
      iframe.contentWindow.document.body.style.overflow = 'hidden';
    }

    result.innerHTML = 'Done! ' + (Date.now() - start) + ' ms';
  }
