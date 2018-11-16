
function switchBulb() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulboff")) {
        image.src = "images/pic_bulbon.gif";
    } else {
        image.src = "images/pic_bulboff.gif";
    }
}
