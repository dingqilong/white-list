
var tm;
function digitalClock(){
var dt=new Date();
document.demoForm.clock.value=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
}
function timeOn(){
tm=window.setInterval('digitalClock()',500);
}
function timeOff(){
window.clearInterval(tm);
}
function makeLargeClock(){
	document.getElementById('clock').style.fontSize='200px';
	document.getElementById('clock').style.color='green';
	document.getElementById('clock').style.border='0';
	}
	function makeLargeClockRed(){
	document.getElementById('clock').style.fontSize='200px';
	document.getElementById('clock').style.color='red';
	document.getElementById('clock').style.border='0';
	}
