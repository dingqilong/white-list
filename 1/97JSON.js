

var fidoString = '{ "name": "Fido", "breed": "Mixed", "weight": 38 }';
var fido = JSON.parse(fidoString);
console.log("We have made a dog out of a string! " + fido.name);


var fido2 = {
	name: "Fido",
	breed: "Mixed",
	weight: 38
};
var fidoString = JSON.stringify(fido2);
console.log("We made a string from a dog! " + fidoString);

  