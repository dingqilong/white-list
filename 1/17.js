Array.prototype.myUcase=function(){
  for (i=0;i<this.length;i++){
      this[i]=this[i].toUpperCase();
  }
}
function myFunction(){
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.myUcase();
  var x=document.getElementById("demo");
  x.innerHTML=fruits;
}