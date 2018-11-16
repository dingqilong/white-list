
    	function converter(decNum){
			if(decNum >= 16){
				return decNum.toString(16);
				}
				else{
					return "0" + decNum.toString(16);
					}
			}
			
			var colorIt = "#"+(converter(255) + converter(108) + converter(4));
			document.writeln (colorIt);
    