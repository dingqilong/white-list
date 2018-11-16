
  // vue官网： https://cn.vuejs.org/v2/guide/
  // 初始化Vue

  var obj = {
    el: '#abc',
    data: {
      title: '学习JavaScript'
    }    
  };

  var app = new Vue(obj);

  setTimeout(function () {
    app.title = 'JavaScript真容易'
  }, 5000);

