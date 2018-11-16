
var byId = document.getElementById.bind(document);

var log = byId("log");

function handler(ev) {
  log.innerHTML += "<p></p>";
  log.lastElementChild.textContent = ev.type + " in " + ev.target.id + " (handled by " + ev.currentTarget.id + ")\n";
}

var under_under = byId("under_under");
var under = byId("under");
var over1 = byId("over1");
var over2 = byId("over2");
var over3 = byId("over3");
var over4 = byId("over4");
var over5 = byId("over5");
var body = document.body;

var types = ["click", "mousedown", "mouseup"];
for (var i = 0, type; (type = types[i]); ++i) {
  under_under.addEventListener(type, handler);
  under.addEventListener(type, handler);
  over1.addEventListener(type, handler);
  over2.addEventListener(type, handler);
  over3.addEventListener(type, handler);
  over4.addEventListener(type, handler);
  over5.addEventListener(type, handler);
  body.addEventListener(type, handler);
}
