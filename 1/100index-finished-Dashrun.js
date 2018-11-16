
  const slider = document.querySelector(".items");
  let isMouseDown = false;//记录鼠标是否按下
  let startX;//按下时位置的x坐标
  let scrollLeft;//记录视口相对于items最左侧已经滚过的距离

  slider.addEventListener('mousedown',(e) =>{
      isMouseDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseup',(e) =>{
      isMouseDown = false;
      slider.classList.remove('active');
  });

  slider.addEventListener('mousemove',(e) =>{
     if (!isMouseDown) {
          return;
      }
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });

