
function setKeypressHandler (el, keyHandler) {
  if (el.addEventListener) {
    el.addEventListener('keypress', keyHandler, false);
    el.addEventListener('keydown', keyHandler, false);
    el.addEventListener('keyup', keyHandler, false);
  } else {
    el.attachEvent('onkeypress', keyHandler);
    el.attachEvent('onkeydown', keyHandler);
    el.attachEvent('onkeyup', keyHandler);
  }
}

function output (text) {
  var div = document.getElementById('debugOutput');
  div.appendChild(document.createTextNode(text));
  div.appendChild(document.createElement('br'));
}

window.onload = function () {
  // Super dumb browser detection
  var isIE = window.navigator.userAgent.search('MSIE') != -1
    || window.navigator.userAgent.search('Trident') != -1;

  var editFrame = document.getElementById('editFrame').contentWindow;
  setKeypressHandler(editFrame.document, printEventData);
  if (isIE) {
    editFrame.document.body.contentEditable = true;
  } else {
    editFrame.document.designMode = 'On';
    // Attach a name to the containing HTML element
    editFrame.document.getElementsByTagName("html")[0].id = "frameHtml";
  }

  var editDiv = document.getElementById('editDiv');
  setKeypressHandler(editDiv, printEventData);
  editDiv.contentEditable = true;

  editFrame.document.body.style.margin = 1;
  editFrame.document.body.style.padding = 0;
  editFrame.document.body.id = 'theBody';

  editDiv.style.margin = 1;
  editDiv.style.padding = 0;

  window.setTimeout(function() {
    var pre = document.createElement('pre');
    function write(text) {
      pre.appendChild(document.createTextNode(text));
      pre.appendChild(document.createElement('br'));
    }

    write('frame.contentWindow.document.designMode: ' +
      editFrame.document.designMode);
    write('frame.contentWindow.document.body.contentEditable: ' +
      editFrame.document.body.contentEditable);
    document.getElementById('editFrameInfo').appendChild(pre);

    pre = document.createElement('pre');
    write('div.ownerDocument.designMode: ' +
      editDiv.ownerDocument.designMode);
    write('div.ownerDocument.body.contentEditable: ' +
      editDiv.ownerDocument.body.contentEditable);
    write('div.contentEditable: ' +
      editDiv.contentEditable);
    document.getElementById('editDivInfo').appendChild(pre);
  }, 0);
};

function isDef(obj, prop) {
  return typeof obj[prop] != 'undefined';
}

function printEventData(e) {
  e = e || window.event;

  function write(id, text, opt_color) {
    var el = document.getElementById(id);
    el.innerHTML = '[' + text + ']';
    el.style.backgroundColor = opt_color || 'white';
  }
  write('type', e.type);
  write('tagName', isDef(e, 'target') ? e.target.tagName : e.srcElement.tagName);
  write('tagId', isDef(e, 'target') ? e.target.id : e.srcElement.id);
  write('keyidentifier', isDef(e, 'keyIdentifier') ? e.keyIdentifier : 'n/a');
  write('keylocation', isDef(e, 'keyLocation') ? e.keyLocation : 'n/a');
  write('keycode', e.keyCode);
  write('charcode', e.charCode);
  write('which', e.which);
  if (isDef(e, 'isTrusted')) {
    write('istrusted', e.isTrusted, e.isTrusted ? '#afa' : '#faa');
  } else {
    write('istrusted', 'n/a');
  }
  write('alt', e.altKey);
  write('ctrl', e.ctrlKey);
  write('shift', e.shiftKey);
  write('meta', e.metaKey);

  var s = "";
  for (var i in e) {
    s += i + ": " + e[i] + "   ";
  }
  //alert(s);
}
