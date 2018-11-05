for(var i=1;i<=3;i++){
  console.log(i);
  setTimeout(function(){
    console.log(i); //输出：1,2,3，4,4,4
  },0)
}