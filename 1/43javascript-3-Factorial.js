
var n;
function calculatefactorial(n){
	if(n==0){
		return 1;
		}else{
			return n*calculatefactorial(n-1);
		}
		}
var number=prompt("Enter a Numver: ","1");
alert(calculatefactorial(number));
document.writeln("Factorial of Your input ("+number+") "+"is: "+calculatefactorial(number));
