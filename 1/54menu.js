
(function() {
	// And this, kids, is what lazy JS developers do when they need a menu in Jekyll
	var menuEls = document.getElementById('docs-menu-list').children,
		el,
		currUrl = window.location.href;
	for(var i = 0, l = menuEls.length; i < l; i++) {
		el = menuEls[i].children[0];
		if( currUrl.indexOf( el.href ) > -1 ) {
			el.className += 'docs-menu__item--active';
		}
	}
}());
