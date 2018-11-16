
(function(){
var srcElem = document.getElementById("script");
if (srcElem) {
    var dstElem = document.getElementById("scriptContainer");
    if (dstElem) {
        dstElem.innerText = srcElem.innerHTML;
        }
    }
})();
