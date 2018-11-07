

//条件式函数声明是否会被提升，取决浏览器
//条件式函数声明不推荐写

// foo(); //报错，因为未被提升
if(true){
    function foo(){
        console.log("123");
    }
}
foo();//123

