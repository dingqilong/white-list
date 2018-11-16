
var hero = document.querySelector('.hero');
var text = hero.querySelector('h1');
var factor = 0.4;//当鼠标移动至显示区域边界时，阴影距离占hero元素宽和高的比例
//在div范围内监听
hero.addEventListener('mousemove',shadowMove);

//文字阴影效果及移动函数
function shadowMove(e){
    var range = {
      x:hero.offsetWidth,
      y:hero.offsetHeight
    }
    var pos = {
      x:e.target.offsetLeft+e.offsetX,
      y:e.target.offsetTop+e.offsetY
    }
    //计算阴影移动距离
    var disX = parseInt((pos.x-range.x/2)*factor);
    var disY = parseInt((pos.y-range.y/2)*factor);
    //修改阴影样式
    text.style.textShadow = disX+'px '+disY+'px 0 #3498db,'+(-disX)+'px '+disY+'px 0 #1abc9c,'+disY+'px '+(-disX)+'px 0 #9b59b6,'+(-disY)+'px '+(-disX)+'px 0 #e74c3c';
}
