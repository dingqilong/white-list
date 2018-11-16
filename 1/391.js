
    window.onload = function ()
    {
        var oMenu = document.getElementById("menu");
        var aImg = oMenu.getElementsByTagName("img");
        var aWidth = [];
        var i = 0;
        //保存原宽度, 并设置当前宽度
        for (i = 0; i < aImg.length; i++)
        {
            aWidth.push(aImg[i].offsetWidth);  //当前图片为128px乘128px
            aImg[i].width = parseInt(aImg[i].offsetWidth / 2) ;  //为每一张图片设置新宽度,为原宽度/2
        }
        //鼠标移动事件
        oMenu.onmousemove = function (event)
        {
            var EVENT = event || window.event;
            for (i = 0; i < aImg.length; i++)
            {
                var a = EVENT.clientX - aImg[i].offsetLeft - aImg[i].offsetWidth / 2;
                var b = EVENT.clientY - aImg[i].offsetTop - oMenu.offsetTop - aImg[i].offsetHeight / 2;
                var iScale = 1 - Math.sqrt(a * a + b * b) / 300;
                if (iScale < 0.5) iScale = 0.5;
                aImg[i].width = aWidth[i] * iScale;
            }
        };
    };
