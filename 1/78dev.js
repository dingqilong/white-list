
		window.assert = window.parent.assert;
		window.done = window.parent.done;

		window.WARN = Function.prototype.bind.call(
			window.console.warn,
			window.console
		);

		window.console.warn = function(msg, err) {
			var isSafari = /Property name must be a string literal/.test(err.message);
			if(isSafari) {
				if(window.assert) {
					window.assert.ok(true, "Safari doesn't provide line/col info");
					window.done();
				}
			}
			window.WARN(msg);
		};


	