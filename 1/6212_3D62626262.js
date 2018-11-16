
window.onload=function()
{
	var oPicList=document.getElementById("picList");
	var oCss=document.getElementById("css");
	var aBtns=document.getElementById("btns").getElementsByTagName("li");
	var aPic=[];
	var iLiW=25;
	var sHtml="";
	var sStyle="";
	var iZindex=0;
	var iLength=oPicList.clientWidth/iLiW;
	var iNow=0;
	for(var i=0;i<iLength;i++)
	{
		i>iLength/2?iZindex--:iZindex++;
		sStyle+="#picList li:nth-of-type("+(i+1)+"){z-index:"+iZindex+"}";
		sStyle+="#picList li:nth-of-type("+(i+1)+") a{background-position:-"+i*iLiW+"px 0px}";
		sHtml+='<li><a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a><span></span><span></span></li>';
	}
	oPicList.innerHTML=sHtml;
	oCss.innerHTML+=sStyle;
	aPic=oPicList.getElementsByTagName("li");
	for(var i=0;i<aBtns.length;i++)
	{
		aBtns[i].onclick=(function(a){
			return function()
			{
				aBtns[iNow].className="";
				for(var i=0;i<aPic.length;i++)
				{
					with(aPic[i].style)
					{
						transition=0.5*Math.abs(iNow-a)+"s "+i*50+"ms all ease-in-out";
						WebkitTransform="translateZ(-180px) rotateX(-"+a*90+"deg)";
					}
				}
				this.className="active";
				iNow=a;
			}
		})(i);
	}
};
