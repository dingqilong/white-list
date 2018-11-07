

//用递归求1…100和。
alert(getSum(100));

function getSum(n){
    //跳出条件
    if(n<1){
        return 0;
    }
    //累加
    return n + getSum(n-1);
}

