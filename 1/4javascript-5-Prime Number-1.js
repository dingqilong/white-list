

function isPrime(num){
var n=Math.sqrt(num);
for(i=2;i<=n;i++){
if(num%i==0)
return false;
}
return true;
}



var number=prompt("Enter for test","0");
if(isPrime(number)){
document.write(number+" "+"Is Prime");
}else{
document.write(number+" " +"Is not prime");
}

