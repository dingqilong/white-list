
   		(function(d) {
   			window.wwp_loadedFonts = [];
   			window.wwp_typekitDone = false;

   			function done() {
   				window.wwp_typekitDone = true;
   			}

   			var config = {
   				kitId: 'qzr7zlc',
   				scriptTimeout: 3000,
   				active: done,
   				inactive: done,
   				fontactive: function(family, variant) {
   					window.wwp_loadedFonts.push({
   						family: family,
   						variant: variant
   					});
   				}
   			},
   			h = d.documentElement,
   			t = setTimeout(function() {
   				h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
   				done();
   			}, config.scriptTimeout),
   			tk = d.createElement("script"),
   			f = false,
   			s = d.getElementsByTagName("script")[0],
   			a;

   			h.className += " wf-loading";
   			tk.src = '//use.typekit.net/' + config.kitId + '.js';
   			tk.async = true;
   			tk.onload = tk.onreadystatechange = function() {
   				a = this.readyState;
   				if (f || a && a != "complete" && a != "loaded")return;
   				f = true;
   				clearTimeout(t);

   				try {Typekit.load(config)} catch(e) { console.log(e); }
   			};
   			s.parentNode.insertBefore(tk, s)
   		})(document);
   	