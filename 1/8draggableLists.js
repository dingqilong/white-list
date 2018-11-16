
      $(function() {
          $("#sortable1, #sortable2").sortable({
            connectWith: '.connectedSortable'
            }).disableSelection();

          var report_event = function(report_text) {
            var reportElement = $("#dragging_reports");
            var origText = reportElement.text();
            reportElement.text(origText + " " + report_text);
          }

          $("#sortable2").droppable({
            out: function(event, ui) {
              report_event("DragOut");
            }
            });

          $("#sortable1").droppable({
            drop: function(event, ui) {
              report_event("DropIn " + ui.draggable.text());
            }
            });
          });
    