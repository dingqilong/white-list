
var cars = ["Saab", "Volvo", "BMW"];

//understanding Indexing
//cars[0]="Saab";
//cars[1]="Volvo";
//cars[2]="BMW";
//cars array values will be prineted at demo ID
document.getElementById("demo").innerHTML = cars;
//cars array values will be prineted at demo ID
document.getElementById("demoIndexValue").innerHTML = cars[2];
//cars array length will be prineted at arrayLenth ID
document.getElementById("arrayLenth").innerHTML = cars.length;

//New Way Start from Here
var testArray=new Array(200);
testArray[0]=20;
//testArray[1]=30;
//testArray[2]=40;

document.getElementById("testArrays").innerHTML = testArray[0];
document.getElementById("testArraysLenthFirstTime").innerHTML = testArray.length;
document.getElementById("testArraysLenth").innerHTML = testArray.length;
