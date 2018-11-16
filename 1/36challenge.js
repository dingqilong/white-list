
//
// Use the comments to test each Specimen separately.
//

//
// Specimen #1
//
/*
var secret = "007";

function getSecret() {
	var secret = "008";

	function getValue() {
		return secret;
	}

	return getValue();
}

var result = getSecret();
console.log(result);
*/

//
// Specimen #2
//
var secret = "007";

function getSecret() {
	var secret = "008";

	function getValue() {
		return secret;
	}

	return getValue;
}

var getValueFun = getSecret();
var result = getValueFun();
console.log(result);

