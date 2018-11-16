

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.sitting = false;
Dog.prototype.sit = function() {
	if (this.sitting) {
		console.log(this.name + " is already sitting");
	} else {
		console.log(this.name + " is now sitting");
		this.sitting = true;
	}
}
Dog.prototype.bark = function() {
	if (this.weight > 25) {
		console.log(this.name + " says Woof!");
	} else {
		console.log(this.name + " says Yip!");
	}
};
Dog.prototype.run = function() {
    console.log("Run!");
};
Dog.prototype.wag = function() {
    console.log("Wag!");
};


function ShowDog(name, breed, weight, handler) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.handler = handler;
}

//
// We want the ShowDog prototype to be a Dog instance
//
ShowDog.prototype = new Dog(); 

//
// We do this to make sure the constructor property is correct
//
ShowDog.prototype.constructor = ShowDog;


ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function() { 
	console.log("Stack");
};

ShowDog.prototype.bait = function() {
	console.log("Bait");
};

ShowDog.prototype.gait = function(kind) {
	console.log(kind + "ing");
};

ShowDog.prototype.groom = function() {
	console.log("Groom");
};


var fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
    console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog");
}

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
}
console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);


