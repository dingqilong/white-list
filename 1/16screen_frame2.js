
var initialColor = 0x0F0F0F;
var stepColor = 1000;
var cnt = 1;
for (var i = 1; i < 6; i++) {
  for (var j = 1; j < 6; j++) {
    el = document.getElementById('cell' + i + '' + j);
    el.style.backgroundColor = toColor(initialColor + (cnt * stepColor));
    cnt++;
  }
}
