
function sum(x,y,z){
return x+y+z;
}
function chen(x){
return x*x;
}
var res=compose(chen,sum);
var t=res(2,3,4);
console.log(t);
function compose(f,g){
return function(){
return f.call(this,g.apply(this,arguments));
};}
