var cust1= {
	name: "john",
	id: 100,
	orders: {o1:33},
	$: 30,
	"bal": 40,
	50:60,
};
console.log(cust1.name);
console.log(cust1.orders);
console.log(cust1.$);
console.log(cust1["bal"]);
console.log(cust1[50]);

cust1["city"]="NY";
console.log(cust1["city"]);
delete cust1[50];
console.log(cust1[50]);
