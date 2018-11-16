
            var win;
            function openWin() {
                win = window.open("samWin.html", "win", "width=200, height=100");

            }
            function moveRel() {
                win.moveTo(500, 100);
                win.focus();
            }
            function resizeRel() {
                win.resizeBy(300, 150);
                win.focus();
            }
        