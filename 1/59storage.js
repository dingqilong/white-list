
  function fn(num){
  var result=1,
      index=1;
   if(!fn.storage){
   fn.storage={};
   }else if(fn.storage[num]){
     return fn.storage[num];
   }
   for(;index<num;index++){
   result *=index;
   console.log(1);
   }
   fn.storage[num]=result;
   return result;
  }
  console.log(fn(4));
  console.log(fn(4));
