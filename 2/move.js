var fs = require("fs");
// var path = process.argv.slice(2)[0];
var arr = [];
for(var i = 0; i < 50; i ++){
  var num = Math.round(Math.random()*550);
  if(arr.indexOf(num) == -1){
    arr.push(num);
  }
}
removeJsFile("C:/Users/server/Desktop/白/123/1")
function removeJsFile(path){
  fs.readdir(path,function(err, data){
    // console.log(data)
    for(let i = 0; i < data.length; i ++){
      fs.stat(path + "/" + data[i],(err, stats)=>{
        if(stats.isFile()){
          if(arr.indexOf(i) > -1){
            var newpath = "C:/Users/server/Desktop/白/123/2" + data[i];
            fs.rename(path + "/" + data[i],newpath,(err)=>{
              console.log(err)
            })
          }
        }else if(stats.isDirectory()){
          return removeJsFile(path + "/" + data[i])
        }else{
          return
        }
      })
    }
  })
}
