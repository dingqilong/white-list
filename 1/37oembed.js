
      SC.initialize({
        client_id: 'YOUR_CLIENT_ID'
      });

      var urlForm = document.getElementById('urlForm');
      var url = document.getElementById('url');
      var result = document.getElementById('result');
      var code = document.getElementById('code');

      urlForm.addEventListener('submit', function(event){
        event.preventDefault();
        SC.oEmbed(url.value, {
          element: result
        }).then(function(embed){
          code.value = embed.html;
        }).catch(function(error){
          code.value = error.message;
        });
      });
    