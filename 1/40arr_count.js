
function count(str){
var arr=[];
var res=[];
for(var i=0,len=str.length;i<len;i++){
arr[i]=str[i];
}

console.log(arr);
arr.map(function(item,key){
var count=0;
if(item==arr[key]){
res[item]=(res[item])?++res[item]:++count;
}
}
);
return res;

}
console.log(count("lizhiguolizhiguoooo"));
