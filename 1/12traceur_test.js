
		System.transpiler = "traceur";

		try {
			System.paths.traceur = "../../node_modules/traceur/bin/traceur.js";
		}
		catch(e) {
			console.error("Could not load traceur\n", e);
		}
	