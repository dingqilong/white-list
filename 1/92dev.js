
		window.assert = window.parent.assert;
		window.done = window.parent.done;
	
		window.WARN = Function.prototype.bind.call(
			window.console.warn,
			window.console
		);

		window.console.warn = function(msg) {
			window.assert.ok(
				false,
				"Warning caused by using steal-clone"
			);
			window.WARN(msg);
		};
	