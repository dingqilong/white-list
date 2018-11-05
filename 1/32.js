var c=new Object();
c.name = 'JavaScript';
c.date = '10/10/15';
c.num = 209;

var x=Object.create(c);
console.log(x.name);
Object.prototype.send = function(x){
  console.log(this.name + " sending:" + x);
};


c.send(33);
x.send(55);
