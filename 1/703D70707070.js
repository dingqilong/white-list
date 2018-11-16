
window.onload=function()
{
	var oPic=document.getElementById("pic");
	var oCss=document.getElementById("css");
	var aBtn=document.getElementById("btn").getElementsByTagName("li");
	var iLiW=25;
	var iLength=oPic.clientWidth/iLiW;
	var aLi=[];
	var sHtml="";
	var sCss="";
	var iZindex=0;
	var iNow=0;
	for(var i=0;i<iLength;i++)
	{
		i>iLength/2?iZindex--:iZindex++;
		sCss+=".picList li:nth-of-type("+(i+1)+"){z-index:"+iZindex+";}.picList li:nth-of-type("+(i+1)+") a{background-position:-"+i*iLiW+"px 0px;}"
	}
	oCss.innerHTML+=sCss;
	for(var i=0;i<iLength;i++)
	{
		sHtml+='<li><a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a><span></span><span></span></li>';
	}
	oPic.innerHTML=sHtml;
	aLi=oPic.getElementsByTagName("li");
	for(var i=0;i<aBtn.length;i++)
	{
		aBtn[i].onclick=(function(a){
			return function()
			{
				aBtn[iNow].className="";
				for(var i=0;i<aLi.length;i++)
				{
					aLi[i].style.transition=Math.abs(a-iNow)*0.5+"s "+i*80+"ms all ease";
					aLi[i].style.WebkitTransform="translateZ(-180px) rotateX(-"+a*90+"deg)";
				}
				iNow=a;
				aBtn[iNow].className="active";
			};
		})(i);
	}
}
