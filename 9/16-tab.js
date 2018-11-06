
        window.onload = function () {
            var boxArr = document.getElementsByClassName("box");
            for(var i=0;i<boxArr.length;i++){
                fn(boxArr[i]);
            }
            //函数封装，必须满足格式 ul>li*5^span*5；span默认不显示，显示class为show；tab显示class为current
            function fn(ele){
                var liArr = ele.getElementsByTagName("li");
                var spanArr = ele.getElementsByTagName("span");
                for(var i=0;i<liArr.length;i++){
                    //绑定索引值(自定义属性)
                    liArr[i].index = i;
                    liArr[i].onmouseover = function () {
                        //排他思想，清空
                        for(var j=0;j<liArr.length;j++){
                            liArr[j].className = "";
                            spanArr[j].className = "";
                        }
                        //点亮当前盒子
                        this.className = "current";
                        spanArr[this.index].className = "show";
                    }
                }
            }
        }
    