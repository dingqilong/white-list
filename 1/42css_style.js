
//css带连字符属性变为js形式
function cssStyle(sName){
return sName.replace(/\-(\w)(\w+)/g,function(a,b,c){
return b.toUpperCase()+c.toLowerCase();
}).replace(/^\-/,' ');
}
console.log(cssStyle("background-color-image"));
