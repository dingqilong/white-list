var JScourse = {
    name : 'JavaScript',
    _num: 209,
    part: 0,
    print : function ()
    {
        console.log(this.name + " Course, number of participants:" + this.part);
    }
}


Object.defineProperty(JScourse, 'coursenum', {
    get: function () {
        return this._num;
    },
    set: function (num) {
        if(num > 0 && num < 1000)
            this._num = num;
    }
});


for(var f in JScourse)
    console.log(f + ":" + JScourse[f]);
