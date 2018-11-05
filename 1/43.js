
setTimeout(function () {
    console.log("hi");

},3000);

var t = setInterval(function () {
    console.log("bye");

},1000);

setTimeout(function () {
    clearInterval(t);
},5000);
