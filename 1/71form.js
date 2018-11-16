
function display(){
	var fname=document.forms['myForm']['fname'].value;
	document.getElementById('demoName').innerHTML=fname;
	var gender=document.forms['myForm']['gender'].value;
	document.getElementById('demoGender').innerHTML=gender;
	
	var hobb=document.forms[0];
	
	var hob	="";
	for(i=0; i<hobb.length;i++){
		if(hobb[i].checked){
		hob=hob+hobb[i].value+", ";
		}
		}
	document.getElementById('demoGHobby').innerHTML=hob;
	
	
	var en=document.forms[1];
	
	var entry	="";
	for(i=0; i<en.length;i++){
		if(en[i].checked){
		entry=entry+en[i].value+", ";
		}
		}
	document.getElementById('demoEntry').innerHTML=entry;
	}

