
    function getWin(attr) {//获取window下的元素属性
        return document.documentElement[attr] || document.body[attr];
    }
    var ch = getWin("clientHeight"),
        oDiv = document.getElementById("div1");
    window.onscroll = function () {//判断返回顶部的出现时候；
        var sT = getWin("scrollTop");
        if (sT >= ch) {
            oDiv.style.display = "block";
        }else{
            oDiv.style.display = "none";
        }
    };
    oDiv.onclick = move;
    function move() {
        oDiv.style.display = "none";
        window.clearTimeout(this.timer);
        oDiv.timer = null;
        document.body.scrollTop -= 300;
        if ((document.body.scrollTop - 300) <= 0) {
            document.body.scrollTop = 0;
            return;
        }
        oDiv.timer = window.setTimeout(move, 10);
    }
