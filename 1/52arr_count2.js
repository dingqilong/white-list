
function count(str){
var res=[];
for(var i=0,len=str.length;i<len;i++){
if(str.charAt(i) in res){
console.log(111);
res[str.charAt(i)]++;
}

else res[str.charAt(i)]=1;
}
return res;
}
console.log(count("ooowwww"));
