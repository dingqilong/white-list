
  $(function() {
    $("#draggable").draggable();
    $("#droppable").droppable({
      drop: function(event, ui) {
        $(this).addClass('ui-state-highlight').find('p').html('Dropped!');
      }
  });

        var report_event = function(report_text) {
          var reportElement = $("#drop_reports");
          var origText = reportElement.text();
          reportElement.text(origText + " " + report_text);
        }

        $('body').mousedown(function() {
            report_event('down');
        });

        $('body').mousemove(function() {
            report_event('move');
        });

        $('body').mouseup(function() {
            report_event('up');
        });
  });
  