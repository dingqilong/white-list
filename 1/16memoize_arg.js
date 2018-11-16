
/***
****使用函数的记忆功能，可以大幅提升参与复杂计算的函数性能
****
****/
function memoize(fn){
  return function(){
     var propertyName;
	 fn.storage=fn.storage || {};
	 //借用Array类型,因为"arguments"本身不是array类型,并不包含此方法
	 propertyName=Array.call(this,arguments);//需要考虑到number,string,json,array,object等各种参数数据类型
	 //是否存在记忆的对象中
	 if(propertyName in fn.storage){
	 //如果存在返回相关的值，以避免再次计算
	    return fn.storage[propertyName];
	 }else{
	 //如果不存在，执行相关函数，并将结果保存在记忆的对象中
	 fn.storage[propertyName]=fn.apply(this,arguments);
	  return fn.storage[propertyName];
	 }
  }
};
  function getFactorial(object){
 // var name=this.name,
  //    sype=this.type;
  var result=1,
      index=1;
   for(;index<object.type.length;index++){
   result *=index;
   console.log(1);
   }
  
   return result;
  }
  var getFactorialMemoize=memoize(getFactorial);
  console.log(getFactorialMemoize({name:"li",type:"student"}));
  console.log(getFactorialMemoize({name:"li",type:"student"}));
