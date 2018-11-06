
window.onload = function () {
    //给页面中所有的元素添加一个边框  1px solid pink
    //DOM中，没有提供直接获取后代元素的API，可以通过递归获取子元素
    function getChildNode(node){
        //先找子元素
        var nodeList = node.childNodes;
        var result = [];
        //再找子元素的子元素   for循环中的条件充当结束条件
        for (var i = 0; i < nodeList.length; i++) {
            //childNode获取到到的节点包含了各种类型的节点
            //但是我们只需要元素节点  通过nodeType去判断当前的这个节点是不是元素节点
            var childNode = nodeList[i];
            //判断是否是元素节点
            if(childNode.nodeType == 1){
                result.push(childNode);
                var temp = getChildNode(childNode);
                result = result.concat(temp);
            }
        }
        return result;
    }

    //1.第一次调用时获取body的所有子元素,把所有子元素全部放到result里面
    //2.每放进去一个 就找这个子元素的所有子元素  返回
    //3.把这个返回值和存当前子元素的数组拼接起来 就变成了 子元素 和 孙子元素 的集合

    var arr = getChildNode(document.body);

    for (var i = 0; i < arr.length; i++) {
        var child = arr[i];
        child.style.border= "1px solid pink";
    }
}
