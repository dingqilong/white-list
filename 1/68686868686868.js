
    $(document).ready(function () {
        var a = 500;  //可以改为动态
        var b = 130;
        $("#white").animate({ width: 0, left: "220px" }, 1000, function () {  //宽度变为0的同时，让位置往左边移动父级(box_bg,container)的一半，正好到中间，形成红绿条同时出现
            $("#vs").fadeIn("slow", function () {
                $("#all").html(a + b);
                $("#aa").html(a);
                $("#bb").html(b);
                var newLeft = a / (a + b) * 440 - 20 + "px"; //计算红绿条的百分比，440为总长度，20为vs宽度的一半
                $("#vs").animate({ left: newLeft }, 1000);
                $("#red").animate({ width: newLeft }, 1000);
            });
        });
    });
