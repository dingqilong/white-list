
var sum=0;
var sn=1;
var en=10;

for(sn;sn<=en;sn++){
	
	if(sn%2!=0){
		if(sn==3){
			continue;
		}else{
		sum+=sn;
		if(sn==7)
		break;	
		}
		
	document.writeln("Odd N: "+sn+"<br/>");
		}
	}
	document.writeln(sum);

