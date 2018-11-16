
//当前文件使用部分ES6新特性
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
 
//去前缀函数
const delPrefix = item => item.replace(/^(The|A|An)\s{1}/,'');

//数组排序
const sortedbands = bands.sort((a,b) => delPrefix(a) > delPrefix(b) ? 1 : -1);

//展示至HTML页面
document.querySelector('#bands').innerHTML = '<li>'+sortedbands.join('</li><li>')+'</li>';

//测试Array.prototype.sort()的返回值
bands[0]='I love javascript30!';
console.log(sortedbands);

