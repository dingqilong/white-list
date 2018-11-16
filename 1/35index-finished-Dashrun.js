
      var oLi = document.getElementsByTagName('li');
      var len = oLi.length;
      var activeBackground = document.createElement('span');
      activeBackground.setAttribute('class','highlight');
      document.body.appendChild(activeBackground);

      //避免第一次激活时跳动
      activeBackground.style.display = 'none';


      //监听鼠标移入事件及鼠标移出事件
      for(var i = 0; i < len; i++){
        oLi[i].onmouseenter = lightOn;
      }

      //鼠标
      function lightOn(e){
        var activeLink = e.target.getBoundingClientRect();
        var coords = {
          height:activeLink.height,
          width:activeLink.width,
          left:window.pageXOffset + activeLink.left,
          top: window.pageYOffset + activeLink.top
        }
       activeBackground.style.height = `${coords.height}px`;
       activeBackground.style.width = `${coords.width}px`;
       activeBackground.style.left = `${coords.left}px`;
       activeBackground.style.top = `${coords.top}px`;
       activeBackground.style.display = 'inline';
      }
  