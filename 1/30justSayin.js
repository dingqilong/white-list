

// This code won't work because justSayin needs an environment
// to "close" its free variables.

function justSayin(phrase) {
	var ending = "";
	if (beingFunny) {
		ending = " -- I'm just sayin!";
	} else if (notSoMuch) {
		ending = " -- Not so much.";
	}
	alert(phrase + ending);
}

justSayin("Hey there!");

