var form = window.document.forms[0]
for (var i = 0; i<form.elements.length;i++){
     if (form.elements[i].type == "text"){
         form.elements[i].value = "";
     }
}