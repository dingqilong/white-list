
      SC.initialize({
        client_id: 'YOUR_CLIENT_ID'
      });

      var inputField = document.getElementById('url');
      var title = document.getElementById('title');
      var info = document.getElementById('info');
      var currentPlayer;

      function play() {
        if (currentPlayer) {
          currentPlayer.play().then(function(){
            console.log('Playback started.');
          }).catch(function(e){
            console.error('Playback rejected.', e);
          });
        }
      }

      var streamTrack = function(track){
        return SC.stream('/tracks/' + track.id).then(function(player){
          title.innerText = track.title;
          info.style.display = 'inline-block';
          if (currentPlayer) {
            currentPlayer.pause();
          }
          currentPlayer = window.player = player;
          play();
        }).catch(function(e){
          console.error(e);
        });
      };

      var search = function(event){
        event.preventDefault();
        SC.resolve(inputField.value).then(streamTrack);
      };

      document.getElementById('searchForm').addEventListener('submit', search);

      document.getElementById('pause').addEventListener('click', function(){
        if (currentPlayer) {
          currentPlayer.pause();
        }
      });
      document.getElementById('play').addEventListener('click', function(){
        play();
      });
    