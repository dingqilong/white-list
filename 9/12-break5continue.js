
    //求1-100之间所有奇数的和，要求使用continue
    var sum = 0;
    for(var i = 1; i <= 100; i++){
        if(i % 2 == 0 ){
            continue;
        }else{
            sum += i;
        }
    }
