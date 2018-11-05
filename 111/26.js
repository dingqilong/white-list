var arr=[1,2,3,4,5,6];

function fil(e){
  if(e>3)
    return true;
  return false;
}

arr2 = arr.filter(function(el){
	if(el % 3 == 0)
		return true;
	return false;
});

console.log(arr2);
arr3=arr.filter(fil);
console.log(arr3);
