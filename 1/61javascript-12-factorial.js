
function findFactorial(num) {
 if(num == 0 || num == 1){
	return 1;
 }else{ 
	return findFactorial(num-1) * num;
  }
 
}
 alert(findFactorial(5));

