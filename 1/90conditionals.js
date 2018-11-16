
			/* Title: Conditionals
			 * Description: pattern and antipattern of using if else
			 */

			/* NOTE: Paul Irish states that the first statement (normal pattern) is only an antipattern when optimizing for
			 * low-bandwidth source (such as for a bookmarklet).
			 * Using the normal pattern will generally outperform the regex (alternative method 1) in a loop,
			 * and is faster than the object literal (alternative method 2) for lower numbers of conditions,
			 * they generally even out around 10 conditions.
			 * See http://jsperf.com/if-this-or-that
			 */

			// normal pattern
			if (type === 'foo' || type === 'bar') {
			}


			// alternative method 1 - regex test
			if (/^(foo|bar)$/.test(type)) {
			}


			// alternative method 2 - object literal lookup (smaller if < 5 items)
			if (({foo:1, bar:1})[type]) {
			}


			/* alternative method 3 - binary-search-like approach
			 * This approach is best when there are ranges of values for which to test
			 */
			if (value < 6) {
				if (value < 3) {
					if (value == 0) {
						return result0;
					} else if (value == 1) {
						return result1;
					} else {
						return result2;
					}
				} else {
					if (value == 3) {
						return result3;
					} else if (value == 4) {
						return result4;
					} else {
						return result5;
					}
				}
			} else {
				if (value < 8) {
					if (value == 6) {
						return result6;
					} else {
						return result7;
					}
				} else {
					if (value == 8) {
						return result8;
					} else if (value == 9) {
						return result9;
					} else {
						return result10;
					}
				}
			}


			/* alternative method 4 - object/array lookup tables
			 * Most useful when there is logical mapping between a single key and a single value
			 */
			if (value == 0) {
				return result0;
			} else if (value == 1) {
				return result1;
			} else if (value == 2) {
				return result2;
			}
			
			// define the array of results
			var results = [result0, result1, result2];
			// return the correct result
			return results[value];
			
			
			/* alternative method 5 - only using logical operators
			 * Shorter way to use simple statements
			 */
			var 
				type = 'foo',
				type2 = 'bar',
				result = 0;
				
			type == 'foo' && result++;
			console.log(result); // 1
			!type == 'foo' || result++;
			console.log(result); // 2
			type == 'foo' && type2 == 'bar' && result++;
			console.log(result); //3
			type == 'foo' && type2 == 'bar' && result == 3 && (result=0); //parentheses avoid "invalid assignment left-hand side" error
			console.log(result); //0
			type == 'OOF' || result++; //equivalent: type != 'OOF' && result++;
			console.log(result); //1			


			// References
			// http://paulirish.com/2009/perf/
		