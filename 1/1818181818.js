
        Array.prototype.deleteEle=function()
        {
            var obj={};  //建立一个空对象
            var newArr=[];
            var i,j;
            for(i=0;i<this.length;i++)
            {
                if(typeof(obj[this[i]])=="undefined")  //将数组里面的元素作为属性名，如果obj不包含属性名，则建立属性名:''这样的json键值对(如'1':''),经过该for循环之后obj={'1':'','2':'','3':'','4':'','5':'','6':'','8':''}。其实这一步已经去重了。
                {
                    obj[this[i]]="";
                }
            }
            for(j in obj)
            {
                newArr.push(j);  //将不重复的属性名添加到新数组里面并返回值
            }
            return newArr;
        };
        var theArray=new Array(1,2,3,4,5,6,8,5,4);
        document.write(theArray.deleteEle());
//  不用原型
        function test(arr)
        {
            var obj={};
            var newArr=[];
            var i,j;
            for(i=0;i<arr.length;i++)
            {
                if(typeof(obj[arr[i]])=="undefined")  //
                {
                    obj[arr[i]]="";
                }
            }
            for(j in obj)
            {
                newArr.push(j);
            }
            return newArr;
        }
        var test1=test(['1','3','5','123123','2','3']);
        console.log(test1);
    