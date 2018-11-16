
  // target：指向触发事件的元素
  // currentTarget：指向被绑定事件句柄的元素
  // 只有当绑定的事件处理程序与触发该事件处理程序都为同一个对象的时候，两者相同
    document.getElementById('aDiv').addEventListener('click',function(e){
    if(e.target === e.currentTarget) {
      console.log('target === currentTarget')
    }else{
      console.log('target !== currentTarget')
    }
    console.log('target',e.target)
    console.log('currentTarget',e.currentTarget)
    },false)
  