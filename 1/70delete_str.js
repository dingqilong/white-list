
//删除子串，只要是原串中有相同的子串就删掉，不管有多少个都删除，返回子串个数。
//输入字符串为：123abc12de234fg1hi34j123k，子串为：123

function num_sort(){

var str=document.getElementById("input_str").value;
var str_child=document.getElementById("input_child").value;
var arr=[];
for(var i=0,len=str.length;i<len;i++){
arr[i]=str.charAt(i);
}
var count=0;
while(str.indexOf(str_child)!=-1){

count++;
var start=str.indexOf(str_child);

arr.splice(start,str_child.length);
str=arr.join("-").replace(/-/g,'');
}
console.log(str);
console.log(count);
}

