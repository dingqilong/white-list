
/****
*****适用于数组的规模比较大的情况！提升函数性能
*****
****/
var myArray=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var len=myArray.length,
    index=len,
	newArray=[];
while(index--){     //反向操作，利用while的参数为逻辑假的时候自动停止，而不需要像for一样进行比较
newArray.push(myArray[index]);
console.log(newArray);
}
