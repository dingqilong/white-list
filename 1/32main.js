var zzz = require('x/zzz')
console.log(zzz)
');
var g = require('g');

t.equal(m(f(AAA)), 555, 'transformation scope');
t.equal(g(3), 333, 'sub-transformation applied');
t.equal(typeof GGG, 'undefined', 'GGG leak');
