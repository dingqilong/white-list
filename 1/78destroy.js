

    var rellax = new Rellax('.rellax', {
      center: true,
      callback: function(positions) {
        // callback every position change
        console.log(positions);
      }
    });

    // test cancaelAnimation on Rellax destroy
    document.querySelector('#destroy').addEventListener('click', function() {

      rellax.destroy();

    }, false);
	