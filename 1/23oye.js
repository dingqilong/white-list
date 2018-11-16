
	require.config({
		'wind-core':				 '../../src/wind-core.js',
		'wind-async':			 '../../src/wind-async.js',
		'wind-compiler':			 '../../src/wind-compiler.js',
		'wind-builderbase':	 '../../src/wind-builderbase.js',
	});

    require(['wind', 'wind-compiler', 'wind-async'], function (Wind, compiler, async){
		compiler.init(Wind);
        async.init(Wind);

		var printEverySecond = eval(Wind.compile("async", function (texts) {
			for (var i = 0; i < texts.length; i++) {
				$await(Wind.Async.sleep(1000));
				console.log(texts[i]);
			}
		}));

		printEverySecond([1, 2, 3, 4, 5]).start();
	});
