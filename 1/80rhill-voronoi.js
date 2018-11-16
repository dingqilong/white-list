Powerpoint detailing the algorithm</a>)</li>
<li><a href="http://alecmce.com/as3/parabolas-and-quadratic-bezier-curves">Alec McEachran's code</a> to translate a parabola's focal &amp; directrix into parameters for <a href="http://en.wikipedia.org/wiki/Canvas_element">html5 <code>&lt;canvas&gt;</code></a>' <code>quadraticCurveTo()</code> method. It occurred to me I could use a <a href="http://en.wikipedia.org/wiki/B%C3%A9zier_curve">Bézier curve</a> to draw a parabolic front, and when I plugged "bézier from focus directrix" in a search engine to find out if someone already went through this, Alec's site was on the first page of results, and his tutorial and <a href="http://github.com/alecmce/as3geometry/blob/master/src/as3geometry/geom2D/ui/ParabolaDrawer.as">accompanying code</a> worked like a charm. His code allows for parabolas with any orientation, so it could be simplified for the current case where parabolas are always oriented vertical and upward.</li>
<li><a target="_blank" href="http://www.skytopia.com/project/articles/compsci/clipping.html">&ldquo;The Liang-Barsky line clipping algorithm in a nutshell!&rdquo;</a>, to efficiently clip a line within a rectangle.</li>
<!--[if IE]>
<li><a href="http://code.google.com/p/explorercanvas/">excanvas.js</a>: To simulate support of HTML5 <a href="http://en.wikipedia.org/wiki/Canvas_element"><code>&lt;canvas&gt;</code></a> element in Microsoft's Internet Explorer.</li>
<![endif]-->
</ul>
</div>
</div>
<script type="text/javascript">
(function(){
var els=document.querySelectorAll('h4 > span');
for (var i=0; i<els.length; i++){
	var el=els[i];
	el.onclick=function(){
		var id=this.id.replace('Collapse','');
		var div=document.getElementById(id);
		var expanded=div.style.display=='';
		div.style.display=expanded?'none':'';
		this.innerHTML=expanded?'&#9663;':'&#9653;';
		};
	}
})();
