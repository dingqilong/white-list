
var xhrObj=getXHRObject();
xhrObj.onreadystatechange=function(){
if(xhrObj.readyState == 4 && xhrObj.status == 200){
eval(xhrObj.responseText);
}
};
xhrObj.open('GET','XHR_eval.js',true);//必须和主页面在同一域中
xhrObj.send('');
function getXHRObject(){
var xhrObj=false;
try{
	xhrObj=new XMLHttpRequest();
}
catch(e){
	var progid=['MSXML2.XMLHTTP.5.0','MSXML2.XMLHTTP.4.0','MSXML2.XMLHTTP3.0','MSXML2.XMLHTTP','Microsoft.XMLHTTP'];
	for(var i=0,len=progid.length;i<len;i++){
		try{
			xhrObj=new ActiveXObject(progid[i]);
		}
		catch(e){
			continue;
			}
			break;
		}
	}
	finally{
	return xhrObj;
	}

}
