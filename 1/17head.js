
document.addEventListener('DOMContentLoaded', function() {

let elem = document.getElementById('coords-show-mark');

// no elem in ebook mode
if (elem) {
  elem.onclick = function() {
    var elem = document.getElementById("coords-show-mark");

    function createMessageUnder(elem, text) {
      // получить координаты
      var coords = elem.getBoundingClientRect();

      // создать элемент для сообщения
      var message = document.createElement('div');
      // стиль лучше задавать классом
      message.style.cssText = "position:fixed; color: red";

      // к координатам обязательно добавляем "px"!
      message.style.left = coords.left + "px";
      message.style.top = coords.bottom + "px";

      message.innerHTML = text;

      return message;
    }

    // Использование
    // добавить на 5 сек в документ
    var message = createMessageUnder(elem, 'Привет, мир!');
    document.body.appendChild(message);
    setTimeout(function() {
      document.body.removeChild(message);
    }, 5000);
  }
}

});

