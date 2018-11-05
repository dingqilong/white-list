function mulby(numby) {
    return function (num) {
        return num*numby;
    }
}

var mulby2=mulby(2);

console.log(mulby2(20));
