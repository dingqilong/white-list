
  function param(name) {
    var f = new RegExp("\\b" + name + "=([^&]+)").exec(document.location.search);
    if (f) return decodeURIComponent(f[1].replace(/\+/g, " "));
  }

  var username = param("name");
  var message = param("message");

  if (username)
    document.querySelector("#name").innerText = " " + username;
  if (message) {
    document.querySelector("#message").innerText = message;
    document.querySelector("#ok").style.display = "";
  } else {
    document.querySelector("#missing").style.display = "";
  }
