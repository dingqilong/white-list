
//ECMscript3版本实现function.bind()方法
function add(num1,num2){
return this.value+num1+num2;
}
var data={
value:1
};
if(!Function.prototype.bindX){

Function.prototype.bindX=function(o){
var self=this,boundArgs=arguments;

return function(){
var args=[],i;
for(var i=1,len=boundArgs.length;i<len;i++) {
args.push(boundArgs[i]);
}
for(var i=0,len=arguments.length;i<len;i++){
 args.push(arguments[i]);
}
return self.apply(o,args);

};
};
}
var addEx=add.bindX(data,2);
var res=addEx(3);
console.log(res);
