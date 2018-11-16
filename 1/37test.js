
	var steal = {
		paths: {
			"steal-qunit": "node_modules/steal-qunit/steal-qunit.js"
		},
		map: {
			"qunitjs": "node_modules/qunitjs"
		},
		meta: {
			"node_modules/qunitjs/qunit/qunit": {
				"format": "global",
				"exports": "QUnit"
			}
		},
		ext: {
			"css": "node_modules/steal-css/css.js"
		}
	}
