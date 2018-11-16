
function deepClone(obj,newobj){
var newobj=newobj||{};
for(var i in obj){
 if(typeof obj[i] == "object"){
  newobj[i]=(obj[i].constructor ===Array)?[]:{};
  deepClone(obj[i],newobj[i]);
 }else{
 newobj[i]=obj[i];
 console.log(obj[i])
 }
}
return newobj;
}
var userTemplate={
  username:"lizhiguo",
  tag:["smarty","husband"],
  password:"123456"
};
var user1=deepClone(userTemplate);
user1.username="guodegan";
user1.tag.push("ugly");
user1.password="laoguo";
console.log(user1);
var user2=deepClone(userTemplate);
user2.username="xiaoshengyang";
user2.tag.push("shuai");
user2.password="xiaos";
console.log(user2);
