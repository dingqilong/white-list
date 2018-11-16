
		window.done = window.parent.done;
		window.assert = window.parent.assert;

		window.WARN = Function.prototype.bind.call(window.console.warn,
			window.console);

		window.console.warn = function(msg) {
			if (window.assert) {
				assert.ok(msg, "should give a warning when 'main' is not set in production environment.");
			}
			window.WARN(msg);
		}
	