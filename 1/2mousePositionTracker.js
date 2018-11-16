
    jQuery(document).ready(function(){
        $('#mousetracker').mousemove(function(e){
          xPos = e.pageX - this.offsetLeft;
          yPos = e.pageY - this.offsetTop;
          $('#status').html(xPos + ', ' + yPos);
          });
        })

