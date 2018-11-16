
//ÿ�����ʵ�һ����д

function num_sort(){
var str_child=document.getElementById("input_child").value;
var res=str_child.replace(/\s?(\w)(\w*)/g,function(a,b,c){
return b.toUpperCase()+c+" ";
});
console.log(res);
}

