
		System.transpiler = "babel";

		try {
			System.paths.babel = "../../node_modules/babel-standalone/babel.js";
		}
		catch(e) {
			console.error("Could not load babel\n", e);
		}
	