
function fn(num) {
    return new Promise(function(resolve, reject) {
        if (typeof num === 'number') {
            resolve();
        } else {
            reject();
        }
    }).then(function() {
        console.log('argument is a number');
    }, function() {
        console.log('argument is not a number');
    })
}
 
fn('hahha');
fn(1234);
