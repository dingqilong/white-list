
var byId = document.getElementById.bind(document);

var log = byId("log");

function handler(ev) {
  log.innerHTML += "<p></p>";
  log.lastElementChild.textContent = ev.type + " in " + ev.target.id + " (handled by " + ev.currentTarget.id + ")\n";
}

var under = byId("under");
var over = byId("over");
var body = document.body;

var types = ["click", "mousedown", "mouseup"];
for (var i = 0, type; (type = types[i]); ++i) {
  under.addEventListener(type, handler);
  over.addEventListener(type, handler);
  body.addEventListener(type, handler);
}
