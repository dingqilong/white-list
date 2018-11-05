var JScourse = {
    name : 'JavaScript',
    part: 0,
    print : function ()
    {
        console.log(this.name + " Course, number of participants:" + this.part);
        console.log(this.coursenum);
    }
}


Object.defineProperty(JScourse, 'coursenum', {
    value: 209,
    writable: true,
});


JScourse.print();
console.log(JScourse.coursenum);
JScourse.coursenum = 100;
console.log(JScourse.coursenum);
JScourse.print();
