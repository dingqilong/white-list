
		window.assert = window.parent.assert;
		window.done = window.parent.done;

		window.WARN = Function.prototype.bind.call(
			window.console.warn,
			window.console
		);

		window.console.warn = function(msg) {
			window.assert.ok(
				!/is being instantiated twice/.test(msg),
				"steal should not warn users when a module was loaded before the config"
			);
			window.WARN.apply(this, arguments);
			window.done();
		};
	