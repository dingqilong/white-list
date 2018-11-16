
			// workaround for bug in Safari 3.  See #7189
			if (/3[\.0-9]+ Safari/.test(navigator.appVersion))
			{
				window.console = {
				    origConsole: window.console,
				    log: function(s){
						this.origConsole.log(s);
					},
					info: function(s){
						this.origConsole.info(s);
					},
					error: function(s){
						this.origConsole.error(s);
					},
					warn: function(s){
						this.origConsole.warn(s);
					}
				};
			}
		