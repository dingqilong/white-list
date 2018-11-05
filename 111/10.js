function changeRef(c1){
	c1.name = "dani";
}


var cust1= {
	name: "john",
	id: 100
};
console.log(cust1.name);
console.log(cust1['name']);
console.log(cust1["name"]);


changeRef(cust1);
console.log(cust1.name);
