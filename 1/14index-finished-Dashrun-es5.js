
//当前版本未使用ES6新语法
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
 
//去前缀函数
function delPrefix(item){
 return item.replace(/^(The|A|An)\s{1}/,'');
}

//展示至HTML页面
function displayArray(arr){
  /*
   *此处使用document.createElement()及appendChild()可达到相同的，
   *本例中采用的方法减少了更改DOM现场的次数，可以提高性能
   */
  document.getElementById('bands').innerHTML = '<li>'+arr.join('</li><li>')+'</li>';
}

//按要求排序
bands.sort(function(a,b){
  return delPrefix(a) > delPrefix(b) ? 1 : -1;
});

displayArray(bands);

