
var EventUtil={
 addHandler:function(element,type,handler){
 if(element.addEventListener){
	element.addEventListener(type,handler,false);  //谷歌，firefix
 }else if(element.attachEvent){
    element.attachEvent("on"+type,handler);
 }else{
 element["on"+type]=handler;
 }
 },
 getEvent:function(event){
 return event ? event:window.event;
 },
 getTarget:function(event){
 return event.target || event.srcElement;
 },
 preventDefault:function(event){
 if(event.preventDefault){
 event.preventDefault();
 }else{
 event.returnValue=false;
 }
 }
}
var form=document.getElementById("btn");
EventUtil.addHandler(btn,"click",function(event){
event=EventUtil.getEvent(event);
target=EventUtil.getTarget(event);
btn.disabled=true;
});
