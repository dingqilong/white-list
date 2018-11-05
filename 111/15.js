function add(a,b){
  function mulby10(a){
      return a*10;
    }
  return a+mulby10(b); //ok
}

function genmul(a){
  function mulby(b){
      return a*b;
    }
  return mulby; //ok
}

var r=genmul(4);
console.log(r(3));

console.log(add(2,3));
//console.log(mulby10(2)); //error
