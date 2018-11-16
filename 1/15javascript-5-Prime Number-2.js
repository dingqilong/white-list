

function isPrime(num){
var n=Math.sqrt(num);
for(i=2;i<=n;i++){
if(num%i==0)
return false;
}
return true;
}


function checkPrimeNumbers(startNum, endNum){
	for(startNum; startNum<=endNum; startNum++){
		if(isPrime(startNum)){
document.writeln(startNum+" "+"Is Prime");
document.writeln("<br/>");
}else{
document.writeln(startNum+" " +"Is not prime");
document.writeln("<br/>");
}
}
	}
