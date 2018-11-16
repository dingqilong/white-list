
/***
****使用函数的记忆功能，可以大幅提升参与复杂计算的函数性能
****
****/
function memoize(fn){
  return function(){
     var propertyName;
	 fn.storage=fn.storage || {};
	 propertyName=fn.call(this.arguments);
	 if(propertyName in fn.storage){
	    return fn.storage[propertyName];
	 }else{
	 fn.storage[propertyName]=fn.apply(this,arguments);
	  return fn.storage[propertyName];
	 }
  }
};
  function getFactorial(num){
  var result=1,
      index=1;
   for(;index<num;index++){
   result *=index;
   console.log(1);
   }
  
   return result;
  }
  var getFactorialMemoize=memoize(getFactorial);
  console.log(getFactorialMemoize(5));
  console.log(getFactorialMemoize(5));
