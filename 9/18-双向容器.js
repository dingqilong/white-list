
    //如果移动单一的选项，操作有selected属性的，如果移动所有的选项，直接全部操作

    //1.获取事件源和相关元素
    var sel1 = document.getElementById("sel1");
    var sel2 = document.getElementById("sel2");
    var inpArr = document.getElementsByTagName("input");

    //2.绑定事件(push和appendChild用法相似：但是一个是控制数组，一个是控制元素节点)
    //全部移到右侧
    inpArr[0].onclick = function () {
        var optArr = sel1.children;
        for(var i=0;i<optArr.length;){
            sel2.appendChild(optArr[i]);
        }
    }
    //全部移到左侧
    inpArr[1].onclick = function () {
        var optArr = sel2.children;
        for(var i=0;i<optArr.length;){
            sel1.appendChild(optArr[i]);
        }
    }
    //移动选择项到右侧
    inpArr[2].onclick = function () {
        var optArr = sel1.children;
        for(var i=optArr.length-1;i>=0;i--){
            if(optArr[i].selected==true){
                optArr[i].selected=false;
                sel2.appendChild(optArr[i]);
            }
        }
        //获取sel2中的子元素，然后排序
        var param = Array.from(sel2.children).sort(function (a,b) {
            return a.value-b.value;
        });
        //删除所有子元素
        for(var i=0;i<sel2.children.length;i++){
            sel2.removeChild(sel2.children[i]);
        }
        //添加排好序的数组
        for(var i=0;i<param.length;i++){
            sel2.appendChild(param[i]);
        }
    }
    //移动选择项到左侧
    inpArr[3].onclick = function () {
        var optArr = sel2.children;
        for(var i=optArr.length-1;i>=0;i--){
            if(optArr[i].selected==true){
                optArr[i].selected=false;
                sel1.appendChild(optArr[i]);
            }
        }
        var param = Array.from(sel1.children).sort(function (a,b) {
            return a.value-b.value;
        });
        for(var i=0;i<sel1.children.length;i++){
            sel1.removeChild(sel1.children[i]);
        }
        for(var i=0;i<param.length;i++){
            sel1.appendChild(param[i]);
        }
    }
