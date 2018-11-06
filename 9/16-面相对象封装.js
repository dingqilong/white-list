

//使用函数将代码封装，使得复用性更高
//使用函数封装带来的问题：
//1.全局变量污染
//2.代码结构不够清晰，维护不方便

//使用对象进行封装后的优势
//1.暴露在全局的只有一个对象名 不会造成全局变量污染
//2.使用对象将代码进行功能模块的划分，有利于日后的维护

window.onload = function () {

    var divs = Query.getEle.tag("div");
    Query.setCss.setStyle(divs);

    var ps = Query.getEle.tag("p");
    Query.setCss.setStyle(ps);
}

//字面量方式
var Query = {
    getEle:{
        tag: function (tagName){
            return document.getElementsByTagName(tagName);
        },
        id: function (id){
            return document.getElementById(id);
        }
    },
    setCss: {
        setStyle: function (elements){
            for (var j = 0; j < elements.length; j++) {
                var ele = elements[j];
                ele.style.border = "1px solid red";
            }
        },
        css:function(option){},
        addClass:function(){},
    }
}
