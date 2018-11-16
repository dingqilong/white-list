
function highlightMe(elem) {
    elem.style.backgroundColor='yellow'
    alert(elem.className)
    elem.style.backgroundColor = ''
}

function highlightMe2(e) {
    highlightMe(e.currentTarget);
}
