
// 求1到100之间所有不能被3整除的整数的第一个大于2000的和
var sum = 0;
for(var i=1;i<=100;i++){
	if(i%3===0){
		continue;
	}
	sum+=i;
	if(sum>2000){
		alert(sum);
		break;
	}
}