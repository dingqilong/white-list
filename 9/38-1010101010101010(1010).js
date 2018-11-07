

var songList = [
    {
        songName:"情书",
        singer:"张学友"
    },
    {
        songName:"演员",
        singer:"谦"
    },
    {
        songName:"李白",
        singer:"李荣浩"
    }

];

//增删该查

//增
function addSong(song){
   songList.push(song);
}
//删
function removeSong(songName){
    var song = selectSong(songName);
    var index = songList.indexOf(song);
    songList.splice(index, 1);
}
//改
function updateSong(songName, singer) {
    var song = selectSong(songName);
    song.singer = singer;
}
//查
function selectSong(songName) {
    for (var k = 0; k < songList.length; k++) {
        var song = songList[k];
        if(song.songName == songName){
            return song;
        }
    }
    return null;
}

addSong({
   songName:"sunshine",
   singer:"csxiaoyao"
});
console.log(JSON.stringify(songList));
removeSong("李白");
console.log(JSON.stringify(songList));
updateSong("演员","薛之谦");
console.log(JSON.stringify(songList));
var obj = selectSong("情书");
console.log(JSON.stringify(obj));

