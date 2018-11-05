var JScourse = {
    num : 209,
    name : 'JavaScript',
    part: 0,
    print : function ()
    {
        console.log(this.name + " Course, number of participants:" + this.part);
    }
}

Object.defineProperty(JScourse, 'register', {
   value: function (id) {
       console.log("register student");
       this.part++;
   }
});

JScourse.print();

JScourse.register(99);

JScourse.print();
