
//计算出现字符最多的元素
var str= "thisprojprojprojprojectehetestlloworld!otest"; 
var arr = str.split(""); 
var obj = {};
var objArr = []; 
for(var i=0,j; j=arr[i]; i++){
if(!obj[j])
obj[j]=1; 
objArr[obj[j]++]=j;
 }
 document.write(objArr[objArr.length-1]+"=="+(objArr.length-1));
