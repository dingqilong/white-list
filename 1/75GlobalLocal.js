
    	var onlyGlobal = "This variable is only global";
		var localGlobal = "I\'m global now!";
		function showMe(){
			var localGlobal = "I\'m local now!";
			var onlyLocal = "Only works on the local level.";
			alert(localGlobal + "--" + onlyLocal);
			}
			
			showMe();
			document.writeln(onlyGlobal + "<p>" + localGlobal);
			alert(onlyGlobal);
    