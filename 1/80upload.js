
    var intervalId;
    function onTick() {
      var label = document.getElementById('upload_label');
      label.innerHTML += '.';
    }

    function onUploadSubmit() {
      document.getElementById('upload_target').contentWindow.document.body.
          innerHTML = '';
      var label = document.getElementById('upload_label');
      label.innerHTML = 'Uploading "' + document.forms[0].upload.value + '"';
      label.style.display = '';
      intervalId = window.setInterval(onTick, 500);
      return true;
    }

    function onUploadDone() {
      var label = document.getElementById('upload_label');
      label.style.display = 'none';
      window.clearInterval(intervalId);
      return true;
    }
  