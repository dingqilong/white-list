   
        //判断数组的相似度，只考虑元素类型，没有实现null识别
        function arraysSimilar(arr1, arr2){
        var len1=arr1.length,len2=arr2.length;
        if(len1==len2){
             var a1=count(arr1);
             var a2=count(arr2);
             if(a1.length==a2.length){
			 console.log(a2.length);
                      var res=a1.every(function(item,index){
                          return a1.item===a2.item
                          }
                      );
					  return res;
        }else{
		return false;
		}
             }else{
			 return false;
			 }
       
        }
        function count(arr){
            var res=[];
         for(var i=0,len=arr.length;i<len;i++){
		 var type=typeof arr[i];
		
	  if(type in res){
				res[type]++;   
            }else{
                res[type]=1;
            }
        }
        return res;
		
        }
		var array1=[1,null,null];
		var array2=[null,2,null];
		var value=arraysSimilar(array1,array2);
		console.log(value);
    