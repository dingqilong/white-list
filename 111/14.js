add1(10,20); // OK
//add2(10,20); // Error

function add1(a,b)
{
return a+b;
}

var add2 = function(a,b)
{
return a+b;
}

add1(10,20); // OK
add2(10,20); // OK
