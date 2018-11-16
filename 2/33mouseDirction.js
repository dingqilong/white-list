
    $(function () {
        $("#box").on("mouseenter mouseleave", function (e) {
            var w = $(this).width();
            var h = $(this).height();
            var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
            var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
            var dirNum = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
            /*
                dirNum:0,1,2,3 ---> t r b l
                以上代码是网友分享
                以下代码是模仿拉勾网首页的一个小效果做的
            */
            var eventType = e.type;
            var aPos = [{ left: 0, top: -200 }, { left: 200, top: 0 }, { left: 0, top: 200 }, { left: -200, top: 0 }];
            if (eventType == 'mouseenter') {
                $("#box2").css(aPos[dirNum]).stop(true, true).animate({ left: 0, top: 0 }, 200);
            } else {
                $("#box2").stop(true, true).animate(aPos[dirNum], 200);
            }
        });
    });
    