
    var arr=[1,2,3,2,2,2,4,4,"a","b","a","hehe","nimei","test","nimei"];
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    alert(arr);
