
var div = document.getElementById("box");
// 元素节点.属性（元素节点[属性]）:绑定的属性值不会出现在标签上
// 驼峰命名，没有设置值是“”，class设置了类样式不能获取
div.className = "sun"; //替换旧类名
div.className += " hide"; //保留原类名，添加新类名
div.style.cssText = "width: 200px; height: 200px;";

// 透明度
div.style.opacity = "0.2";
div.style.filter = "alpha(opacity=20)";
// 定位
div.style.display = "block";
div.style.top = "300px";
div.style.left = "300px";
div.style.zIndex = "2";
div.style.paddingTop = "20px";
// 形状
div.style.width = "200px";
div.style.height = "200px";
// 其他
div.style.color = "red";
div.style.backgroundColor = "orange";
div.style.fontSize ="24px";
div.style.textDecoration = "line-through";
            
