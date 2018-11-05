function assign(){
  location.assign("http://www.baidu.com");
}

//使用新的文档替换当前文档。替换以后，不能回退。

function replace(){
  location.replace("http://www.baidu.com");
}
function reload(){
  /*从新加载当前文档。刷新页面
   *reload():在本地刷新当前页面，相当于F5
   *reload(true):强制刷新，从服务器端从新加载页面，相当于ctrl+F5
   */
  location.reload();
}