
  // vue官网： https://cn.vuejs.org/v2/guide/
  // 初始化Vue

  var app = new Vue({
    el: '#app',   // #app 和html中div#id的 app 对应
    data: {
      wordsList: []  // 变量wordsList可以在html使用
    },
    methods: {
      fetchData: function() {
        axios.get('https://js.xinshengdaxue.com/api/v1/learnJS/course/1/words')
          .then(function (response) {
            app.wordsList = response.data.words;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      sendData: function() {
        //TODO: 对老师说点什么呢？
        axios.post('https://js.xinshengdaxue.com/api/v1/learnJS/sayToMe', {
              name: 'weiyang',
              account: '15026797926',
              content: '这次说点正经的，老师节日快乐～'
        })
        .then(function (response){
          if (response.data.code == 1)
            alert("Post success");
          else
            alert("Post Failed with %d", response.code);
        })
        .catch(function (error){
          console.log(error);
        })
        // alert("sendData");
      }
    }
  });

  app.fetchData();
