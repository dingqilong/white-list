

var phoneNumber = new RegExp(/^\d{3}-?\d{4}$/);
var amyHome = "555-1212";
var result = amyHome.match(phoneNumber);
console.log(result);

var invalid = "5556-1212";
var result2 = invalid.match(phoneNumber);
console.log(result2);

  