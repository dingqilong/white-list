
//输入10个数字，按各个位上的和从小到大排序，如果相同，则按数字从小到大排序。 
//输入描述: 10个正整数，保证都在int范围内，用空格隔开 
//输出描述: 10个数字，其从大到小的值，用空格隔开，最后一个数字后不加空格 
//输入样例 11 3 2 4 5 9 8 7 10 6 
//输出样例 10 2 11 3 4 5 6 7 8 9

function num_sort(){
var res=[],result=[];
var str=document.getElementById("input_str").value;
var arr=str.split(" ");
for(var i=0,len=arr.length;i<len;i++){
var index=arr[i];
res[index.toString()]=add(index);
}
var c=[];
for(var i=0,len=res.length;i<len;i++){
c[i]=res[i];
}
c.sort(function(a,b){
return a-b;
});
for(var i=0,len=c.length;i<len;i++){
res.map(function(item,index){
if(c[i]==item){
result[i]=index;
}
});
}
console.log(result);
function add(str){
var sum=0;
for(var i=0,len=str.length;i<len;i++){
var a=str.charAt(i);
a=parseInt(a);
sum+=a;

}
//console.log(sum);
return sum;
}
}

