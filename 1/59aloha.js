

function sayIt(translator) {
	var phrase = translator("Hello");
	alert(phrase);
}

function hawaiianTranslator(word) {
	if (word === "Hello") return "Aloha";
	if (word === "Goodbye") return "Aloha";
}

sayIt(hawaiianTranslator);

