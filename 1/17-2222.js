
        //需求：让tr各行变色，鼠标放入tr中，高亮显示。

        //1.隔行变色。
        var tbody = document.getElementById("target");
        var trArr = tbody.children;
        //循环判断并各行赋值属性（背景色）
        for(var i=0;i<trArr.length;i++){
            if(i%2!==0){
                trArr[i].style.backgroundColor = "#a3a3a3";
            }else{
                trArr[i].style.backgroundColor = "#ccc";
            }
            //鼠标进入高亮显示(鼠标移开的时候要恢复原始颜色)
            //计数器（进入tr之后，立刻记录颜色，然后移开的时候使用记录好的颜色）
            var color = "";
            trArr[i].onmouseover = function () {
                //赋值颜色之前，先记录颜色
                color = this.style.backgroundColor;
                this.style.backgroundColor = "#fff";
            }
            trArr[i].onmouseout = function () {
                this.style.backgroundColor = color;
            }
        }
    