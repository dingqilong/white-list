
var count=0;
function replaceWithCount(value){
count++;
return value + count;
}
console.log("hello world".replace(/o/g,replaceWithCount));
console.log("hello world".replace(/\s/g,replaceWithCount));
console.log("hello world".replace(/o/g,replaceWithCount));
