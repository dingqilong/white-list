

// 《JavaScript语言精粹》作者提出了一个方式来实现继承
function jicheng(obj){
    var o = {};
    o.__proto__ = obj;
    return o;
}
var o = jicheng({name:"sunshine"});
console.log(o);

var obj = {
    name:"csxiaoyao"
};

//检测浏览器的能力，如果没有Object.create方法就添加（不推荐使用）
if(Object.create){
    var o = Object.create(obj);
}else{
    Object.create = function () {
        function F() {
        }
        F.prototype = obj;
        var o = new F();
    }
    var o = Object.create(obj);
}

//自定义函数
function create(obj){
    if(Object.create){
        return Object.create(obj);
    }else{
        function F() {
            
        }
        F.prototype = obj;
        return new F();
    }
}
