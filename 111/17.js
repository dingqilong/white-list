function f1(a,b){
  var f2;
  if(a>b)  {
    f2=function(a) { return a+10;}
  }  else {
    f2=function(a) { return a*10;}
  }
  return f2(10);
}


console.log(f1(1,2)); 
console.log(f1(2,1));
