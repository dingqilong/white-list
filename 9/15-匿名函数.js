

// function fn(){
//    console.log(1);
// }

//匿名函数
(function(){
    console.log(0);
});

//调用方法：
//1.直接调用
(function(){
    console.log(1);//1
})();

//2.绑定事件
document.onclick = function () {
    console.log(2);//2
}

//3.定时器
setInterval(function () {
    console.log(3);// 3 3 3 ……
},1000);


