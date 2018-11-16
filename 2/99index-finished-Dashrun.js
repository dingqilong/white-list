
var mainUl = document.querySelectorAll('.cool > li >a');
var navArr = Array.from(mainUl);
var bg = document.querySelector('.dropdownBackground');

navArr.map(function(item,index){
  item.onmouseover = function (){
        item.parentNode.classList.add('trigger-enter');
        item.parentNode.classList.add('trigger-enter-active');
        toggleBackground(index+1);
  }

  item.onmouseout = function (){
      item.parentNode.classList.remove('trigger-enter');
      item.parentNode.classList.remove('trigger-enter-active');
      toggleBackground();
  }
});

function toggleBackground(item){
    var itemPos;
    if(item === 1 || item === 2 || item ===3){
      //计算位置
    itemPos = document.querySelector('.dropdown'+item).getBoundingClientRect();
      bg.style.left = `${itemPos.left}px`;
      bg.style.top = `${itemPos.top-60}px`;
      bg.classList.add('open');
      bg.style.width = `${itemPos.width}px`;
      bg.style.height = `${itemPos.height}px`;
    }else{
      bg.style.height = 0;
      bg.style.width = 0;
      bg.classList.remove('open');
    }
}
