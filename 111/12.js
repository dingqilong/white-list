var cust1= {  name: "john",  id: 100};
var cust2={  name:"john",  id: 100};

if(cust1 === cust2)  // reference
console.log("yes");
else
console.log("no");

if(cust1.id === cust2.id) // value
console.log("yes");
else
console.log("no");
