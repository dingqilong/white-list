
/****
*****避免在循环中创建函数,在循环体外创建，在循环体内引用即可！
*****
****/
var myArray=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var len=myArray.length,
    index=0,
	daysObj={},
	dayOfWeek;
for(;index<len;index++){

dayOfWeek=myArray[index];
daysObj[dayOfWeek]={
name:dayOfWeek,
newFunction:newFunction
};
}
function newFunction(){
return this.name;
}
console.log(daysObj["Monday"].newFunction());
