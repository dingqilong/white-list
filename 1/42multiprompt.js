
function cancel(){
console.log(111);
window.close();
}
var text;
var args=dialogArguments;
console.log(args);
text="<legend>"+args[0]+"</legend>";
for(var i=1,len=args.length;i<len;i++){
 text +="<label>"+args[i]+": <input id='f"+i+"'></label><br/>";
 document.getElementById("fields").innerHTML=text;
}
//console.log(text);

function okay(){
var returnValues = [];
for(var i=1,len=args.length;i<len;i++){
returnValues[i-1]=document.getElementById("f"+i).value;
window.close();
}
}
