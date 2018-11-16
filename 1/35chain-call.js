
      function sum(){
          var args = Array.prototype.slice.call(arguments);
          var fn = function(){
              var fn_args = Array.prototype.slice.call(arguments);
              return sum.apply(null, args.concat(fn_args));
          }
          fn.valueOf = function(){
             return args.reduce(function(a,b){
                  return a+b
              })
          }
          return fn
      }   
      var result= sum(1,2)(3,4)
      console.log(result)
    