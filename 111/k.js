function close(){
  window.close();
}
function lopen(){
  window.open("http://www.baidu.com","baidu","width=1000px,height=600px,left=100px,top=50px");
}


var  setTimeoutID = 0;
function setTimeout1(){
  
  //setTimeout(function(){console.log("延时器成功执行");},3000);
  
      setTimeoutID = setTimeout(lopen,3000);
      
}    
function clearTimeout1(){
  
  clearTimeout(setTimeoutID);
  
}