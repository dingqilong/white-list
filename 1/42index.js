
function test(golden, text) {
  var ok = true;
  var i = 0;
  function callback(token, style, lineNo, pos){
		//console.log(String(token) + " " + String(style) + " " + String(lineNo) + " " + String(pos));
    var result = [String(token), String(style)];
    if (golden[i][0] != result[0] || golden[i][1] != result[1]){
      return "Error, expected: " + String(golden[i]) + ", got: " + String(result);
      ok = false;
    }
    i++;
  }
  CodeMirror.runMode(text, "text/x-vb",callback); 

  if (ok) return "Tests OK";
}
function testTypes() {
  var golden = [['Integer','keyword'],[' ','null'],['Float','keyword']]
  var text =  "Integer Float";
  return test(golden,text);
}
function testIf(){
  var golden = [['If','keyword'],[' ','null'],['True','keyword'],[' ','null'],['End','keyword'],[' ','null'],['If','keyword']];
  var text = 'If True End If';
  return test(golden, text);
}
function testDecl(){
   var golden = [['Dim','keyword'],[' ','null'],['x','variable'],[' ','null'],['as','keyword'],[' ','null'],['Integer','keyword']];
   var text = 'Dim x as Integer';
   return test(golden, text);
}
function testAll(){
  var result = "";

  result += testTypes() + "\n";
  result += testIf() + "\n";
  result += testDecl() + "\n";
  return result;

}
function initText(editor) {
  var content = 'Class rocket\nPrivate quality as Double\nPublic Sub launch() as String\nif quality > 0.8\nlaunch = "Successful"\nElse\nlaunch = "Failed"\nEnd If\nEnd sub\nEnd class\n';
  editor.setValue(content);
  for (var i =0; i< editor.lineCount(); i++) editor.indentLine(i);
}
function init() {
    editor = CodeMirror.fromTextArea(document.getElementById("solution"), {
        lineNumbers: true,
        mode: "text/x-vb",
        readOnly: false
    });
    runTest();
}
function runTest() {
	document.getElementById('testresult').innerHTML = testAll();
  initText(editor);
	
}
document.body.onload = init;
