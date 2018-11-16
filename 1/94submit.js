
  function dec(str) {
    return decodeURIComponent(str.replace(/\+/g, " "));
  }

  document.querySelector("pre").textContent =
    document.location.search.slice(1).split("&").map(param => {
      let [name, value] = param.split("=");
      return dec(name) + ": " + (dec(value) || "(nothing)");
    }).join("\n");
