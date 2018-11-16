
 //高级选择器
  const hero = document.querySelector('.hero');
  const text = hero.querySelector('h1');
  const factor = 0.4; //当鼠标移动至显示区域边界时，阴影距离占hero元素宽和高的比例

  function shadowMove(e) {
    //解构赋值
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    
    //将鼠标位置转换为相对视口左上角的坐标，本例中由于hero元素占满视口故未起实际作用
    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = parseInt((x-width/2)*factor);
    const yWalk = parseInt((y-height/2)*factor);

    //使用模板字符串赋值
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;

  }

//在hero范围内监听鼠标移动事件
  hero.addEventListener('mousemove', shadowMove);
