
var xhrObj=getXHRObject();
xhrObj.onreadystatechange=function(){
if(xhrObj.readyState == 4 && xhrObj.status == 200){
var script=document.createElement('script');
document.getElementsByTagName('head')[0].appendChild(script);
script.text=xhrObj.responseText;
}
};
xhrObj.open('GET','XHR_eval.js',true);//�������ҳ����ͬһ����
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
