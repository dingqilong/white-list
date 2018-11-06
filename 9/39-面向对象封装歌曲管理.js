

function SongManager(){
    this.songList = null;
}

//在当前对象的方法中，调用当前对象的其他方法，需要使用this
//例如 在 removeSong 方法中调用 selectSong  this.selectSong
SongManager.prototype = {
    init:function (songList) {
        this.songList = songList;
    },
    addSong: function (song){
        this.songList.push(song);
    },
    removeSong:function (songName){
        var song = this.selectSong(songName);
        if(song == null){
            throw "要删除的歌曲不存在";
        }
        var index = this.songList.indexOf(song);
        this.songList.splice(index, 1);
    },
    updateSong: function (songName, singer) {
        var song = this.selectSong(songName);
        if(song == null){
            throw "要修改的歌曲不存在";
        }
        song.singer = singer;
    },
    selectSong: function (songName) {
        for (var k = 0; k < this.songList.length; k++) {
            var song = this.songList[k];
            if(song.songName == songName){
                return song;
            }
        }
        return null;
    }
};

var songManager = new SongManager();
songManager.init([
    {
        songName:"song1",
        singer:"singer1"
    },
    {
        songName:"song2",
        singer:"singer2"
    }
]);
songManager.addSong({
    songName:"song3",
    singer:"singer3"
})
songManager.removeSong("song2");
console.log(songManager.songList);

